import MainLayout from '../components/Layout/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Datenschutz from '../pages/Datenschutz'
import Home from '../pages/Home'
import Jobs from '../pages/Jobs'
import Impressum from '../pages/Impressum'
import Services from '../pages/Services'
import ThankYou from '../pages/ThankYou'
import NotFound, { FehlerSeite } from '../pages/NotFound'

/** Pfade der Seiten; auch fürs Vorrendern (scripts/vorrendern.mjs) und die Sitemap. */
export const seiten = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/contact', element: <Contact /> },
  { path: '/danke', element: <ThankYou /> },
  { path: '/impressum', element: <Impressum /> },
  { path: '/datenschutz', element: <Datenschutz /> },
]

/** Routen-Konfiguration ohne Browser-Bezug (gilt für Client und Vorrendern). */
export const routenKonfiguration = [
  {
    element: <MainLayout />,
    children: [
      {
        // Pfadlose Zwischenroute: Fehler und unbekannte Pfade bleiben im Layout
        errorElement: <FehlerSeite />,
        children: [...seiten, { path: '*', element: <NotFound /> }],
      },
    ],
  },
]
