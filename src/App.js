import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './components/layout'
import { NotFoundPage } from './pages/not-found'
import { MainPage } from './pages/main'
import { NewsPage } from './pages/news'
import { NewsItemPage } from './pages/news-item'
import { ProfilePage } from './pages/profile'
import AuthorizationPage from './pages/authorization'
import RegistrationPage from './pages/registration'

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/authorization" element={<AuthorizationPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route index element={<MainPage />} />
          <Route path="/category/:categoryId" element={<NewsPage />} />
          <Route path="/news/:postId" element={<NewsItemPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App