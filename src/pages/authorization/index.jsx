import { useState } from "react"

export const AuthorizationPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:1717/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then (res => res.json())
    .then((data) => {
        localStorage.setItem('token', data.token)

    })
  }  

  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>
        Log in
      </button>
    </form>
  )
}