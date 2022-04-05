import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { RiSearchLine } from 'react-icons/ri'
import MediaQuery from 'react-responsive'
import useLocalStorage from '../../../hooks/useLocalStorage'
import MenuIcon from './MenuIcon'
import OffcanvasNav from './OffcanvasNav'
import UserMenu from './UserMenu'

export default function Menubar() {
    const [darkMode, setDarkMode] = useLocalStorage(
        'dark_mode',
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((isDark) => !isDark)
    }

    const toggleNav = () => {
        setIsNavOpen((open) => !open)
    }

    return (
        <ul className="flex gap-x-2 justify-end items-center">
            <MenuIcon icon={RiSearchLine} />
            <MenuIcon icon={darkMode ? FiSun : FiMoon} onClick={toggleDarkMode} />
            <MediaQuery minWidth={1024}>
                <UserMenu />
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
                <MenuIcon icon={FiMenu} onClick={toggleNav} />
                <OffcanvasNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            </MediaQuery>
        </ul>
    )
}
