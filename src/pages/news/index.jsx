import { NewsItem } from "../../components/news-item"
import { Loader } from '../../components/loader'
import { useNewsPage } from "./useNewsPage"

export const NewsPage = () => {
  const { events, loading, error } = useNewsPage()

  return (
    <div>
      {loading && <Loader />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        events.map((e) => (
          <NewsItem key={e.id} event={e}/>
        ))
      }
    </div>
  )
}