import { Menu, Transition } from '@headlessui/react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import DropdownMenu from './DropdownMenu'

export default function UserAvatar({ avatarSrc, displayName }) {
    return (
        <Menu as="li" className="flex items-center relative">
            <Menu.Button type="button" className="h-full">
                <Avatar>
                    <AvatarImage
                        src={avatarSrc}
                        alt={displayName}
                        className="rounded-full object-cover h-10 ring-2 ring-indigo-500/60 w-10 dark:ring-indigo-500"
                    />
                    <AvatarFallback delayMs={600}>
                        <div className="rounded-full bg-gray-200 h-10 ring-2 ring-indigo-500/60 w-10 relative overflow-hidden dark:ring-indigo-500">
                            <svg
                                className="h-12 -left-1 text-gray-400 w-12 absolute"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </AvatarFallback>
                </Avatar>
            </Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <DropdownMenu />
            </Transition>
        </Menu>
    )
}
