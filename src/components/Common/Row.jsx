import mergeProps from 'react-merge-props'

export default function Row({
    as: Component = 'div',
    hCenter = false,
    vCenter = true,
    children,
    ...props
}) {
    return (
        <Component
            {...mergeProps(
                {
                    className: `flex flex-wrap ${hCenter ? 'justify-center ' : ''}${
                        vCenter ? 'items-center' : ''
                    }`
                },
                props
            )}
        >
            {children}
        </Component>
    )
}
