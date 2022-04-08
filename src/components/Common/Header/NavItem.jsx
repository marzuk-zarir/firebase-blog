import { Link } from 'react-router-dom'

export default function NavItem({ children, ...props }) {
    return (
        <li className="font-medium text-lg transition-colors hover:text-indigo-500">
            <Link
                className="pb-1 transition-border hover:(border-b-2 border-indigo-500) "
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}
