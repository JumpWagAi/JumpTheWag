import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const { theme } = useTheme()
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <nav className="relative z-20 py-6 px-6 lg:px-20">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={isDark ? '/Jumpwag_logo_full.png' : '/full-logo-black.png'} alt="JumpWag Logo" className="h-8" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/blog" className="text-neutral-light/60 hover:text-text-default transition-colors text-sm lg:text-base">
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
