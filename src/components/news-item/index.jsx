import { Link } from "react-router-dom"

export const NewsItem = ({ event }) => {
  return (
    <div className="news-item">
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <address>{event.text}</address>
      <Link to={`/news/${event.id}`}>detail</Link>
    </div>
  )
}