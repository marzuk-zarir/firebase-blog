import { createContext, useContext, useState } from 'react'

const OffcanvasNavContext = createContext()

// Consumer hook
export function useOffcanvasNav() {
    return useContext(OffcanvasNavContext)
}

// Provider Component
export function OffcanvasNavProvider({ children }) {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen((open) => !open)
    }

    return (
        <OffcanvasNavContext.Provider value={{ isNavOpen, toggleNav }}>
            {children}
        </OffcanvasNavContext.Provider>
    )
}
