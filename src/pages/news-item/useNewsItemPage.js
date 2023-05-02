import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useNewsItemPage = () => {
  const [newsItem, setNewsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  // budete ispolzovat v zaprose
  const { postId } = useParams()

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        setLoading(true)
        const response = await fetch(`http://3.208.19.134/api/posts/${postId}`)
        const data = await response.json()
        setNewsList(data)
      } 
      catch {
        setError('ошибка')
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

