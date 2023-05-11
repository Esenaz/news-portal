import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import classes from './style.module.css'
import Footer from '../footer'

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}