import { useEffect, useState } from "react"


export const useComments = (id) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')  


  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true)
        const response = await fetch(`http://3.208.19.134/api/posts/${id}/comment/`)
        const data = await response.json()
        setComments(data.results)
      } 
      catch {
        setError('ошибка')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchComments()
  }, [])

  return {
    comments, loading, error
  }
}