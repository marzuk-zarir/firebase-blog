import { Menu } from '@headlessui/react'

export default function DropdownDivider() {
    return (
        <Menu.Item
            as="hr"
            className="border-b border-0 border-gray-300/60 my-0 dark:border-gray-600/60"
        />
    )
}
