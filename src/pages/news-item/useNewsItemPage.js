import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


export const useNewsItemPage = () => {
  const [newsItem, setNewsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { postId } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchNewsItem() {
      try {
        setLoading(true)
        const response = await fetch(`http://3.208.19.134/api/posts/${postId}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setNewsList(data)
      } 
      catch {
        setError('ошибка')
        console.log(error)
        if (error) navigate('/')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchNewsItem()
  }, [])

  return {
    newsItem, loading, error
  }
}

