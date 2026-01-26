import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Datenschutz from '../pages/Datenschutz'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import Impressum from '../pages/Impressum'
import Services from '../pages/Services'
import ThankYou from '../pages/ThankYou'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/jobs', element: <Jobs /> },
      { path: '/contact', element: <Contact /> },
      { path: '/danke', element: <ThankYou /> },
      { path: '/impressum', element: <Impressum /> },
      { path: '/datenschutz', element: <Datenschutz /> },
    ],
  },
])

export default router