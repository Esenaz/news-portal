import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Comment = ({newsId}) => {
  const username = localStorage.getItem('username')
  const [text, setText] = useState("")
  const navigate = useNavigate()
  console.log('qw', newsId)
  console.log(username, text)

  const handleComment = (e) => {
    e.preventDefault()
    fetch(`http://3.208.19.134/api/posts/${newsId}/comment/`, { 
      method: 'POST',
      body: JSON.stringify({ username, text }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}` 
      }
    })
    .then (res => res.json())
    .then((data) => {
        console.log(data)
    })

  }  

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
        
        <button onClick={handleComment}>
          Log in
        </button>
        
      </form>
    </div>
  )
}

export default Comment

