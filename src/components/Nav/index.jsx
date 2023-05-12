import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import './style.css'



export const Nav = () => {
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
        localStorage.getItem('token') &&
        <li className="profile">
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



