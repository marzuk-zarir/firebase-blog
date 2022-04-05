import { ImFire } from 'react-icons/im'

export default function Brand() {
    return (
        <div className="text-2xl inline-block md:text-3xl">
            <a href="/">
                <div className="flex gap-x-2 items-center md:gap-x-3 lg:gap-x-4">
                    <ImFire className="text-orange-400" />
                    <h1 className="font-cursive font-medium text-primary-500 dark:text-primary-200">
                        Firebase
                    </h1>
                </div>
            </a>
        </div>
    )
}
