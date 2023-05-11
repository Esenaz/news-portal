import { NavLink } from "react-router-dom"
import './style.css'
import { useState } from "react"

export const Nav = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  return (
    <ul className="nav">
        <div className="newshub">
        <div className="news">News</div>
        <div className="hub">hub</div>
        </div>
        <li>
        <NavLink to="/authorization">Авторизация</NavLink>
      </li>
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      {
        token &&
        <li>
        <NavLink to="/profile">Профиль</NavLink>
        </li>
      }
      

    </ul>
  )
}