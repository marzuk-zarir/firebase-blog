import mergeProps from 'react-merge-props'

export default function MenuLink({ href, children, ...props }) {
    return (
        <li className="font-medium text-base transition-colors">
            <a
                href={href}
                {...mergeProps(
                    {
                        className:
                            'rounded-md py-[10px] px-4 transition-colors focus:(ring-3 ring-indigo-500/60)'
                    },
                    props
                )}
            >
                {children}
            </a>
        </li>
    )
}
