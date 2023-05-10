import { Link } from "react-router-dom"
import "./style.css"

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <h1>{category.name}</h1>
      <img src={category.image} />
      <button className="openNews">
      <Link to={`/category/${category.id}`}>Подробнее</Link>
      </button>
    </div>
  )
}