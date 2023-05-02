import { NewsItem } from "../../components/news-item"
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
          <NewsItem key={item.id} data={item}/>
        ))
      }
    </div>
  )
}