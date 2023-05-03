import { CategoryItem } from "../../components/category-item"
import { Loader } from '../../components/loader'
import { useMainPage } from "./useMainPage"
import "./main-page.css"

export const MainPage = () => {
  const { categories, loading, error } = useMainPage()

  return (
    <div className="main-page-container">
      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}
      {
        categories.map((e) => (
          <CategoryItem key={e.id} category={e}/>
        ))
      }
    </div>
  )
}