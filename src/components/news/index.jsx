import { Link } from "react-router-dom"

export const News = ({ data }) => {
  console.log(data)
  
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.publication_date}</p>
      <address>{data.text}</address>
      <Link to={`/news/${data.id}`}>Читать полностью</Link>
    </div>
  )
}