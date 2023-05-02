import { Link } from "react-router-dom"

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <h1>{category.name}</h1>
      <img src={category.image} />
      <Link to={`/category/${category.id}`}>detail</Link>
    </div>
  )
}