import { CategoryItem } from "../../components/category-item"
import { Loader } from '../../components/loader'
import { useMainPage } from "./useMainPage"
import "./main-page.css"
import { Parallax } from 'react-parallax';


export const MainPage = () => {
  const { categories, loading, error } = useMainPage()

  return (
    <div className="main-page-container">
        <Parallax className="parallax" blur={1} bgImage='https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' bgImageAlt="the cat" strength={200}>
        <h1 className="slogan" >Newshub - твой проводник в мир новостей! </h1>
       </Parallax>
        
      <h1 className="categ" >Новостные категории</h1>
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