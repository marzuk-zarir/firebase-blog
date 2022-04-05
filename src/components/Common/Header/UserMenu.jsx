import { useState } from 'react'
import MenuLink from './MenuLink'
import UserAvatar from './UserAvatar'

export default function UserMenu() {
    // @todo fake authorization
    const [isAuth] = useState(false)

    return isAuth ? (
        <UserAvatar
            avatarSrc="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            displayName="Marzuk"
        />
    ) : (
        <>
            <MenuLink
                href="#"
                className="bg-primary-400/10 dark:(bg-[#4a4a4d] hover:text-primary-200) hover:text-primary-500 "
            >
                Login
            </MenuLink>
            <MenuLink href="#" className="bg-indigo-500 text-primary-200 hover:(bg-indigo-600)">
                Register
            </MenuLink>
        </>
    )
}
