import mergeProps from 'react-merge-props'

export default function Container({ children, ...props }) {
    return (
        <div
            {...mergeProps({ className: 'container mx-auto px-3 md:px-4 lg:px-6 2xl:px-8' }, props)}
        >
            {children}
        </div>
    )
}
