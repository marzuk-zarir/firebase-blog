import { useState } from 'react'
import MenuLink from './MenuLink'
import NavItem from './NavItem'

export default function OffcanvasNav({ isNavOpen, setIsNavOpen }) {
    // @todo fake authorization
    const [isAuth, setIsAuth] = useState(false)

    const handleHide = () => {
        setIsNavOpen(false)
    }

    return (
        <>
            <div
                className={`absolute top-0 left-0 h-full w-64 sm:w-80 md:w-96 p-4 z-50 bg-primary-200 shadow-primary-400 transition-transform duration-300 transform dark:(bg-dark-600 shadow-primary-500) ${
                    isNavOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full shadow-none'
                }`}
            >
                <div className="flex flex-col h-full gap-y-5">
                    {isAuth && (
                        <div className="flex flex-col font-medium mt-5 gap-y-1 items-center justify-center select-none">
                            <img
                                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                                alt="Marzuk Zarir"
                                className="rounded-full object-cover h-16 ring-3 ring-indigo-500/60 w-16"
                            />
                            <p>Marzuk Zarir</p>
                            <p>marzukzarir@gmail.com</p>
                        </div>
                    )}
                    <ul
                        className={`flex flex-col text-center gap-y-2 ${
                            !isAuth && 'mt-auto !gap-y-4'
                        }`}
                    >
                        <li>
                            <p className="font-semibold text-lg text-primary-500 select-none dark:text-neutral-200">
                                General
                            </p>
                        </li>
                        <NavItem href="#">Home</NavItem>
                        <NavItem href="#">Articles</NavItem>
                        <NavItem href="#">Categories</NavItem>
                        <NavItem href="#">About</NavItem>
                        <NavItem href="#">Contacts</NavItem>
                    </ul>
                    {isAuth ? (
                        <>
                            <ul className="flex flex-col text-center gap-y-2">
                                <li>
                                    <p className="font-semibold text-lg text-primary-500 select-none dark:text-neutral-200">
                                        Admin
                                    </p>
                                </li>
                                <NavItem href="#">Dashboard</NavItem>
                                <NavItem href="#">Profile</NavItem>
                                <NavItem href="#">Settings</NavItem>
                                <NavItem href="#">Help</NavItem>
                            </ul>
                            <a
                                href="/#"
                                className="rounded-md font-semibold mt-auto bg-red-500 text-center py-2 text-primary-200 block"
                            >
                                Logout
                            </a>
                        </>
                    ) : (
                        <ul className="flex mt-auto gap-x-2 justify-center">
                            <MenuLink
                                href="#"
                                className="bg-primary-400/10 dark:(bg-[#4a4a4d] hover:text-primary-200) hover:text-primary-500 "
                            >
                                Login
                            </MenuLink>
                            <MenuLink
                                href="#"
                                className="bg-indigo-500 text-primary-200 hover:(bg-indigo-600)"
                            >
                                Register
                            </MenuLink>
                        </ul>
                    )}
                </div>
            </div>
            {isNavOpen && (
                <div
                    className="bg-clip-padding h-full bg-primary-500/60 w-full inset-0 transition-colors z-40 duration-500 absolute backdrop-filter backdrop-blur-sm dark:bg-neutral-700/40"
                    onClick={handleHide}
                    aria-hidden="true"
                />
            )}
        </>
    )
}
