import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getItemApi, updateItemApi, deleteItemApi } from "./utils"


export const useNewsItemPage = () => {
  const [newsItem, setNewsList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { postId } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchNewsItem() {
      try {
        setLoading(true)
        const data = await getItemApi(postId)
        setNewsList(data)
      } 
      catch {
        setError('ошибка')
        console.log(error)
        console.log('ошибка')
        if (error) navigate('/')
      } 
      finally {
        setLoading(false)
      }
    }
    fetchNewsItem()
  }, [])
 

  const updateItem = async (formData) => {
    try {
      setLoading(true)
      const data = await updateItemApi(postId, formData)
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

  const deleteItem = async () => {
    try {
      setLoading(true)
      const data = await deleteItemApi(postId)
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

  return {
    newsItem, loading, error, deleteItem, updateItem
  }
}

