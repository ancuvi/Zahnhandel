import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import type { NavLink } from '../Layout/MainLayout'

type MobileNavProps = {
  links: NavLink[]
  activePath: string
  open: boolean
  onToggle: () => void
  onClose: () => void
}

const MobileNav = ({ links, activePath, open, onToggle, onClose }: MobileNavProps) => {
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800 transition-colors hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[80px] z-50 w-full border-t border-stone-100 bg-white shadow-xl"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col p-4">
              {links.map((link) => {
                const isActive = activePath === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={`group flex items-center justify-between rounded-lg px-4 py-4 text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-primary-50 text-primary-800' 
                        : 'text-primary-700 hover:bg-stone-50 hover:text-primary-700'
                    }`}
                  >
                    {link.label}
                    {isActive && <div className="h-2 w-2 rounded-full bg-primary-600" />}
                  </Link>
                )
              })}
            </nav>
            <div className="bg-stone-50 px-8 py-6 text-center">
              <Link 
                to="/contact" 
                onClick={onClose}
                className="inline-block rounded-full bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
              >
                Termin vereinbaren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for clicking outside */}
      {open && (
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 top-[80px] z-40 bg-stone-900/50 backdrop-blur-sm"
         />
      )}
    </div>
  )
}

export default MobileNav
