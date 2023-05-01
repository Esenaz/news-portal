import { useParams } from "react-router-dom"



export const NewsItemPage = () => {
  const {id} = useParams()
  return (
      <div>NewsItemPage {id}</div>
  )
}