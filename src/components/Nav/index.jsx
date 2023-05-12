import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import './style.css'
import { useState } from "react"



export const Nav = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  return (
    <ul className="nav">
  

      <li className="author" >
        <NavLink to="/authorization">Авторизация</NavLink>
      </li>

      <Link to="/"> {/* Перенаправление на главную страницу */}
        <div className="newshub">
          <div className="news">News</div>
          <div className="hub">hub</div>
        </div>

      </Link>
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      {

        token &&
        <li>
        <NavLink to="/profile">Профиль</NavLink>

        </li>
      }
        <Link to="/authorization"> {}
          <div className="burger">
            <img src="https://cdn-icons-png.flaticon.com/128/6704/6704965.png" alt="" />
          </div>
        </Link>


    </ul>
  )
}



