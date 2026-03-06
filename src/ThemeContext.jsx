import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function getStoredTheme() {
  return localStorage.getItem('theme') || 'system'
}

function applyTheme(preference) {
  const isDark =
    preference === 'dark' ||
    (preference === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  document.documentElement.classList.toggle('dark', isDark)
}

function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme)

  const setTheme = (value) => {
    localStorage.setItem('theme', value)
    setThemeState(value)
  }

  useEffect(() => {
    applyTheme(theme)

    if (theme !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
