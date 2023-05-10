import { NavLink } from "react-router-dom"
import './style.css'

export const Nav = () => {
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
        localStorage.getItem('token') && 
        <li>
        <NavLink to="/profile">Профиль</NavLink>
        </li>
      }
      

    </ul>
  )
}