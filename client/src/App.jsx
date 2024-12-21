import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import LoginPage from "./pages/login/login.page"
import NotFoundPage from './pages/not-found'
import DashboardPage from './pages/dashboard/dashboard.page'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
