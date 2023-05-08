import { Loader } from '../../components/loader'
import { useComments } from "./useComments"

export const CommentsList = ({ newsId }) => {
  const { comments, loading, error } = useComments(newsId)
  console.log(newsId)
  return (
    <div>
      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}
      {
        comments.map((e) => (
          <div className="">
            <h5>{e.username}</h5>
            <p>{e.text}</p>
          </div>
        ))
      }

      
      
    </div>
  )
}