import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"

export const useMainPage1 = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    mockFetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch((err) => {
        setError('произошла ошибка')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    events, loading, error
  }
}

export const useMainPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true)
        const response = await mockFetch('/category.json')
        const data = await response.json()
        setEvents(data)
      } 
      catch {
        setError('ошибка')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  return {
    events, loading, error
  }
}