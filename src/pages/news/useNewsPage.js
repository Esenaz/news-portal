import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const useNewsPage = () => {
  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchNewsList() {
      try {
        setLoading(true)
        // const response = await mockFetch('/news.json')
        const response = await fetch(`http://3.208.19.134/api/category/${categoryId}/posts`)
        const data = await response.json()
        setNewsList(data.results)
      } 
      catch {
        setError('ошибка')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchNewsList()
  }, [])

  return {
    newsList, loading, error
  }
}