import { useNewsItemPage } from "./useNewsItemPage"
import { NewsItem } from "../../components/news-item"
import { Loader } from '../../components/loader'

export const NewsItemPage = () => {
  const { newsItem, loading, error } = useNewsItemPage()

  return (
    <div>
      {loading && <Loader />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {
        // newsList.map((item) => (
        //   <News key={item.id} data={item}/>
        // ))
        <NewsItem data={newsItem}/>
      }
    </div>
  )
}