export const NewsItem = ({ data }) => {
  console.log(data)
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />
    </div>
  )
}
