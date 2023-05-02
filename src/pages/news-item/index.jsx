import { useParams } from "react-router-dom"


export const NewsItemPage = () => {
    return (
        <div>NewsItemPage</div>
    )
  const {id} = useParams()
  return (
      <div>NewsItemPage {id}</div>
  )
}