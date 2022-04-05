import { Menu } from '@headlessui/react'
import mergeProps from 'react-merge-props'

export default function DropdownItem({ children, ...props }) {
    return (
        <Menu.Item
            as="a"
            {...mergeProps(
                {
                    className:
                        'flex font-medium py-2 px-5 gap-x-2 items-center hover:bg-primary-400/10 dark:hover:bg-neutral-800/40'
                },
                props
            )}
        >
            {children}
        </Menu.Item>
    )
}
