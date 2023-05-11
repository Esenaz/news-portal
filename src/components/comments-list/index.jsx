import { Loader } from '../../components/loader'
import Comment from '../../components/comment'
import { useComments } from "./useComments"

export const CommentsList = ({ newsId }) => {
  const { comments, loading, error, handleComment } = useComments(newsId)
  console.log(newsId)
  console.log(comments, 'comments')
  return (
    <div>
      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}
      {
        comments && Array.isArray(comments) && comments.length
         ? comments.map((e) => (
          <div key={e.id}>
            <h5>{e.username}</h5>
            <p>{e.text}</p>
          </div>
        )) : null
      }

      <Comment newsId={newsId} handleComment={handleComment}/>
      
    </div>
  )
}