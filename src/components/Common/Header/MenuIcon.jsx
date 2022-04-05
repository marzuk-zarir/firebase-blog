export default function MenuIcon({ icon: IconComponent, ...props }) {
    return (
        <li>
            <button
                type="button"
                className="rounded-xl flex p-[6px] items-center overflow-hidden xl:mr-1 dark:(hover:bg-[#4a4a4d] focus:ring-indigo-500/80) hover:bg-primary-400/10 focus:(ring-2 ring-indigo-500/60) "
                {...props}
            >
                <IconComponent className=" h-[22px] w-[22px]" />
            </button>
        </li>
    )
}
