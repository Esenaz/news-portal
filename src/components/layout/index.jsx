import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import classes from './style.module.css'

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  )
}