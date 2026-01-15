import { Link } from 'react-router-dom'
import type { NavLink } from '../Layout/MainLayout'

type NavbarProps = {
  links: NavLink[]
  activePath: string
}

const Navbar = ({ links, activePath }: NavbarProps) => {
  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
      {links.map((link) => {
        const isActive = activePath === link.path
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`relative text-sm font-medium transition-colors duration-200 py-2 ${
              isActive 
                ? 'text-primary-700 font-semibold' 
                : 'text-stone-600 hover:text-primary-600'
            }`}
          >
            {link.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 rounded-full animate-fade-in" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
