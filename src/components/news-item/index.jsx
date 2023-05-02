import { Link, useParams } from "react-router-dom"

export const NewsItem = ({ data }) => {
  const { categoryId } = useParams()
  
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.publication_date}</p>
      <address>{data.text}</address>
      <Link to={`/news/${categoryId}/${data.id}`}>detail</Link>
    </div>
  )
}