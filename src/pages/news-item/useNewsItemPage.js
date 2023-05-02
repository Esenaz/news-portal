// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { mockFetch } from "../../utils/mockFetch"

// export const useNewsItemPage = () => {
//   const [newsItemList, setNewsItemList] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   // budete ispolzovat v zaprose
//   const { postsId } = useParams()

//   useEffect(() => {
//     async function fetchNewsItemList() {
//       try {
//         setLoading(true)
//         // const response = await mockFetch('/news.json')
//         const response = await fetch(`http://3.208.19.134/api/category/${categoryId}/posts`)
//         const data = await response.json()
//         setNewsItemList(data.results)
//       } 
//       catch {
//         setError('ошибка')
//       } 
//       finally {
//         setLoading(false)
//       }
//     }
//     fetchNewsItemList()
//   }, [])

//   return {
//     newsItemList, loading, error
//   }
// }