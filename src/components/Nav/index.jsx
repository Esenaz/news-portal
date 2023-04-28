import { NavLink } from "react-router-dom"
import './style.css'

export const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/authorization">Authorization</NavLink>
      </li>
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
    </ul>
  )
}