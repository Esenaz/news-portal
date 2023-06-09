import { useEffect, useState } from "react"


export const useMainPage = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        const response = await fetch('http://3.208.19.134/api/category/')
        const data = await response.json()
        setCategories(data)
      } 
      catch {
        setError('ошибка')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  return {
    categories, loading, error
  }
}