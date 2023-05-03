import "./news-item.css"

export const NewsItem = ({ data }) => {
  const token = localStorage.getItem('token');
  console.log(data)
  return (
    <div className="news-item">
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.publication_date}</p>
      <img src={data.image} alt="" />
      {token && <button>Изменить</button>}
      {token && <button>Удалить</button>}

    </div>
  )
}
