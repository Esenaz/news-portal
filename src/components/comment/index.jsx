import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Comment = ({newsId, handleComment}) => {
  const username = localStorage.getItem('username')
  const [text, setText] = useState("")
  const navigate = useNavigate()
  console.log('qw', newsId)
  console.log(username, text)


  return (
    <div className="container">
      <form>
        {/* <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <input
          type="text"
          name="text"
          placeholder="write you comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button onClick={(e) => {
          e.preventDefault()
          handleComment(text)
          setText('')
          }}>
          Log in
        </button>
        
      </form>
    </div>
  )
}

export default Comment


