export const NewsItem = ({ event }) => {
  return (
    <div className="news-item">
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <address>{event.text}</address>
    </div>
  )
}