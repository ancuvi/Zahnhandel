import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Hexagon, Phone, Mail, MapPin, Clock } from 'lucide-react'
import MobileNav from '../Navigation/MobileNav'
import Navbar from '../Navigation/Navbar'

export type NavLink = { path: string; label: string }

const navLinks: NavLink[] = [
  { path: '/', label: 'Willkommen' },
  { path: '/about', label: 'Über Uns' },
  { path: '/services', label: 'Unser Angebot' },
  { path: '/jobs', label: 'Stellenangebote' },
  { path: '/contact', label: 'Kontakt' },
]

const MainLayout = () => {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-800 font-sans">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200 py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-3">
            <img 
              src="/images/Logo_Zahntechnig - bearbeitet.png" 
              alt="ZAHNTECHNIK Frankenberg GmbH" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>
          <Navbar links={navLinks} activePath={pathname} />
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-secondary-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-secondary-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
            >
              Termin anfragen
            </Link>
            <MobileNav
              links={navLinks}
              activePath={pathname}
              open={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-300">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-1 space-y-4">
              <Link to="/" className="inline-block mb-4">
                 <img 
                  src="/images/Logo_Zahntechnig - bearbeitet.png" 
                  alt="ZAHNTECHNIK Frankenberg GmbH" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed text-stone-400">
                SOVIEL ZAHN MUSS SEIN! Ihr kompetenter Partner für hochwertigen Zahnersatz und individuelle Lösungen in Frankenberg.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Kontakt</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-secondary-400" />
                  <span>
                    Gewerbering 17<br />
                    09669 Frankenberg
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-secondary-400" />
                  <a href="tel:03720675542" className="hover:text-white transition-colors">037206 / 75542</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-secondary-400" />
                  <a href="mailto:info@zahnhandel.de" className="hover:text-white transition-colors">info@zahnhandel.de</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Öffnungszeiten</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 text-secondary-400" />
                  <div>
                    <p className="text-white">Montag – Donnerstag</p>
                    <p className="text-stone-400">07:00 – 19:00 Uhr</p>
                    <p className="text-white mt-2">Freitag</p>
                    <p className="text-stone-400">07:00 – 17:00 Uhr</p>
                    <p className="text-stone-500 text-xs mt-1">(und nach Vereinbarung)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Rechtliches</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
            <p>&copy; 2026 Markus Schrambke. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
