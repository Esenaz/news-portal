import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "../authorization/style.css"

const RegistrationPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password_2, setPassword2] = useState("")
  const [photo, setPhoto] = useState(null)
  const [email, setEmail] = useState("")
  const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    formData.append("password_2", password_2)
    formData.append("email", email)
    formData.append("photo", photo)

    console.log(username, password, email, photo)
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch('http://3.208.19.134/api/accounts/register/', {
      method: 'POST',
      body: formData
    })
    .then (res => res.json())
    .then((data) => {
        console.log(data)
        navigate('/authorization')
    })
  }  

  return (
    <div className="container">
      <div className="logo"></div>
      <form className="form" onSubmit={handleRegister}>
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
        <input
          type="password"
          name="password_2"
          placeholder="Password confirm"
          value={password_2}
          onChange={(e) => setPassword2(e.target.value)}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="file"
          name="photo"
          placeholder="photo"
          value={""}
          onChange={(e) => setPhoto(e.target.files[0])}
          className="input"
        />
        <button className="button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default RegistrationPage


