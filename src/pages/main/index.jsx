import { CategoryItem } from "../../components/category-item"
import { Loader } from '../../components/loader'
import { useMainPage } from "./useMainPage"
import "./main-page.css"

export const MainPage = () => {
  const { categories, loading, error } = useMainPage()

  return (
    <div className="main-page-container">
        <h1 className="slogan">Newshub - твой проводник в мир новостей!</h1>
      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}

      <div className="category-list">
      {
        categories.map((e) => (
          <CategoryItem key={e.id} category={e}/>
        ))
      }

      </div>
      
    </div>
  )
}