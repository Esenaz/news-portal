import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mockFetch } from "../../utils/mockFetch"

export const useNewsPage = () => {
  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  // budete ispolzovat v zaprose
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchNewsList() {
      try {
        setLoading(true)
        const response = await mockFetch('/news.json')
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