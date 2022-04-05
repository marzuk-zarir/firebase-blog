import mergeProps from 'react-merge-props'

export default function NavItem({ children, ...props }) {
    return (
        <li className="font-medium text-lg transition-colors hover:text-indigo-500">
            <a
                {...mergeProps(
                    {
                        className: 'pb-1 transition-border hover:(border-b-2 border-indigo-500)'
                    },
                    props
                )}
            >
                {children}
            </a>
        </li>
    )
}
