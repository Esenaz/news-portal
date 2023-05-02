import { Link } from "react-router-dom"

export const News = ({ data }) => {
  console.log(data)
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />
      
      {/* <Link to={`/news/${data.id}/`}>detail</Link> */}
    </div>
  )
}