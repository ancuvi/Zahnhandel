import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Datenschutz from '../pages/Datenschutz'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import Impressum from '../pages/Impressum'
import Praxis from '../pages/Praxis'
import Prices from '../pages/Prices'
import Services from '../pages/Services'
import ThankYou from '../pages/ThankYou'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/praxis', element: <Praxis /> },
      { path: '/prices', element: <Prices /> },
      { path: '/jobs', element: <Jobs /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
      { path: '/danke', element: <ThankYou /> },
      { path: '/impressum', element: <Impressum /> },
      { path: '/datenschutz', element: <Datenschutz /> },
    ],
  },
])

export default router
