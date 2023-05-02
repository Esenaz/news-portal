import { News } from "../../components/news"
import { Loader } from '../../components/loader'
import { useNewsPage } from "./useNewsPage"

export const NewsPage = () => {
  const { newsList, loading, error } = useNewsPage()

  return (
    <div>
      {loading && <Loader />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        newsList.map((item) => (
          <News key={item.id} data={item}/>
        ))
      }
    </div>
  )
}