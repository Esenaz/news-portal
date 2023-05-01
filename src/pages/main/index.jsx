import { CategoryItem } from "../../components/category-item"
import { Loader } from '../../components/loader'
import { useMainPage } from "./useMainPage"

export const MainPage = () => {
  const { events, loading, error } = useMainPage()

  return (
    <div>
      {loading && <Loader />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        events.map((e) => (
          <CategoryItem key={e.id} event={e}/>
        ))
      }
    </div>
  )
}