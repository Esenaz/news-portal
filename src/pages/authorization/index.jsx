import { useState } from "react"
import "../authorization/style.css"

const AuthorizationPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://3.208.19.134/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then (res => res.json())
    .then((data) => {
        localStorage.setItem('token', data.username)
        console.log(data)
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
        <button onClick={handleLogin} className="button">
          Log in
        </button>
      </form>
    </div>
  )
}

export default AuthorizationPage


