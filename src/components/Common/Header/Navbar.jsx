import NavItem from './NavItem'

export default function Navbar() {
    return (
        <ul className="flex gap-x-6 items-center ">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">Articles</NavItem>
            <NavItem href="#">Categories</NavItem>
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Contacts</NavItem>
        </ul>
    )
}
