import NavItem from './NavItem'

export default function Navbar() {
    return (
        <ul className="flex gap-x-6 items-center ">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/articles">Articles</NavItem>
            <NavItem to="/categories">Categories</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contacts">Contacts</NavItem>
        </ul>
    )
}
