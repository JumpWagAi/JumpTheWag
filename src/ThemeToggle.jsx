import { useState, useRef, useEffect } from 'react'
import { useTheme } from './ThemeContext'

const modes = ['system', 'light', 'dark']

const labels = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
}

const icons = {
  system: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  light: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  dark: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle theme menu"
        className="p-2 rounded-lg text-neutral-light/60 hover:text-text-default transition-colors"
      >
        {icons[theme]}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-card border border-text-default/10 rounded-xl shadow-lg py-1 z-50">
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => { setTheme(mode); setOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                theme === mode
                  ? 'text-accent'
                  : 'text-neutral-light/60 hover:text-text-default'
              }`}
            >
              {icons[mode]}
              {labels[mode]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
