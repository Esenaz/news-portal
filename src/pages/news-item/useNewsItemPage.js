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
      catch(e) {
        setError(e)
        if (e) navigate('/', { replace: true })
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
      return true;
    } 
    catch(e) {
      setError(e)
      if (e) navigate('/')
    } 
    finally {
      setLoading(false)
    }
  }

  const deleteItem = async () => {
    try {
      setLoading(true)
      const data = await deleteItemApi(postId);
      if (data) {
        navigate('/')
      }
    } 
    catch(e) {
      setError(e)
    } 
    finally {
      setLoading(false)
    }
  }

  return {
    newsItem, loading, error, deleteItem, updateItem
  }
}

