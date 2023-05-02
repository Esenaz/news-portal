import { useNewsItemPage } from "./useNewsItemPage"
import { News } from "../../components/news"
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
        <News data={newsItem}/>
      }
    </div>
  )
}

