import { CategoryItem } from "../../components/category-item"
import { Loader } from '../../components/loader'
import { useMainPage } from "./useMainPage"

export const MainPage = () => {
  const { categories, loading, error } = useMainPage()

  return (
    <div>
      {loading && <Loader />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        categories.map((e) => (
          <CategoryItem key={e.id} category={e}/>
        ))
      }
    </div>
  )
}