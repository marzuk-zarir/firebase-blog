import { Menu } from '@headlessui/react'
import {
    MdAccountCircle,
    MdHelpOutline,
    MdOutlineDashboardCustomize,
    MdOutlineLogout,
    MdSettings
} from 'react-icons/md'
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'

export default function DropdownMenu() {
    return (
        <Menu.Items
            as="div"
            className="rounded-md bg-primary-200 shadow-md mt-8 min-w-60 right-0 shadow-primary-500/30 overflow-hidden absolute dark:(bg-neutral-700 shadow-none) "
        >
            <DropdownItem href="/#" className="py-3">
                <img
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt=""
                    className="rounded-full object-cover h-10 ring-1 ring-indigo-500/60 w-10 dark:ring-indigo-500"
                />
                <div>
                    <p className="font-medium text-sm text-primary-500 dark:text-primary-200">
                        Marzuk Zarir
                    </p>
                    <p className="text-sm">marzukzarir@gmail.com</p>
                </div>
            </DropdownItem>

            <DropdownDivider />

            <DropdownItem href="/#">
                <MdOutlineDashboardCustomize className="h-5 w-5" /> Go to Dashboard
            </DropdownItem>

            <DropdownItem href="/#">
                <MdAccountCircle className="h-5 w-5" /> Visit Profile
            </DropdownItem>

            <DropdownDivider />

            <DropdownItem href="/#">
                <MdSettings className="h-5 w-5" /> Settings
            </DropdownItem>

            <DropdownItem href="/#">
                <MdHelpOutline className="h-5 w-5" /> Help
            </DropdownItem>

            <DropdownDivider />

            <DropdownItem href="/#" className="text-red-500">
                <MdOutlineLogout className="h-5 w-5" /> Logout
            </DropdownItem>
        </Menu.Items>
    )
}
