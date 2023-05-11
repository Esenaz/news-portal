import { useEffect, useState, useMemo, useCallback} from "react"


export const useComments = (id) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')  
  const username = localStorage.getItem('username')

  async function fetchComments() {
    try {
      setLoading(true)
      const response = await fetch(`http://3.208.19.134/api/posts/${id}/comment/`)
      const data = await response.json();
      return data;
    } 
    catch (e) {
      setError('ошибка')
    } 
    finally {
      setLoading(false)
    }
  }

  const handleComment = (text) => {
    // e.preventDefault()
    fetch(`http://3.208.19.134/api/posts/${id}/comment/`, { 
      method: 'POST',
      body: JSON.stringify({ username, text }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}` 
      }
    })
    .then (res => res.json())
    .then((data) => {
        setComments([...comments, data]);
    })

  }  

  const fetch1 = useCallback(() => {
    fetchComments().then((res) => {
      setComments(res.results)
    })
  }, [comments]);

  useEffect(() => {
    fetch1()
  }, [])

  return {
    comments, loading, error, handleComment
  }
}