import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "../authorization/style.css"


const AuthorizationPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://3.208.19.134/api/accounts/token/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then (res => {
      if(res.ok) {
        return res.json()
      }

      throw new Error('Auth failed')
    })
    .then((data) => {
      if(!data.token) {
        navigate('/authorization')
        return
      }
      
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', username)
      navigate('/')
    }).catch((err) => {
      alert(err)
    })

  }  

  return (
    <div className="container">
      <div className="logo"></div>
      <form className="form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <Link to={`index`}>
          <button onClick={handleLogin} className="button">
            Log in
          </button>
        </Link>
        

        <Link to={`/registration`}>
          <button className="create">

            Create profile
          </button>
        </Link>
      </form>
    </div>
  )
}

export default AuthorizationPage


