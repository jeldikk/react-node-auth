import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import LoginPage from "./pages/login/login.page"
import NotFoundPage from './pages/not-found'
import DashboardPage from './pages/dashboard/dashboard.page'
import RegisterPage from './pages/register/register.page'
import { useAuthDetailsContext } from './hooks/auth-details.hook'
import ClustersPage from './pages/clusters/clusters.page'
import ProtectedRoute from './components/protected-route/protected-route.component'

function App() {

  const authDetails = useAuthDetailsContext();

  console.log(authDetails)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/dashboard' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path='/clusters' element={<ProtectedRoute><ClustersPage /></ProtectedRoute>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
