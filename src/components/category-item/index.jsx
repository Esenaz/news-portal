import { Link } from "react-router-dom"

export const CategoryItem = ({ event }) => {
  return (
    <div className="category-item">
      <h1>{event.title}</h1>
      <Link to={`/news/${event.id}`}>detail</Link>
    </div>
  )
}