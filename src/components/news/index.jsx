import { Link } from "react-router-dom"

export const News = ({ data }) => {
  console.log(data)
  const text  = data.text.slice(0, 150)
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <h2>{data.publication_date}</h2>
      <p>{text}...</p>
      <Link to={`/news/${data.id}`}>detail</Link>
    </div>
  )
}