import mergeProps from 'react-merge-props'

export default function Column({
    as: Component = 'div',
    cols = 'auto',
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    ...props
}) {
    const classes = ['flex-grow flex-shrink-0 basis-auto']
    const breakPoints = { sm, md, lg, xl, xxl }

    classes.push(cols === 'auto' ? 'w-auto' : `w-${cols}/12`)
    Object.keys(breakPoints).forEach((key) => {
        if (breakPoints[key] !== undefined) {
            classes.push(
                key === 'xxl' ? `2xl:w-${breakPoints[key]}/12` : `${key}:w-${breakPoints[key]}/12`
            )
        }
    })

    return (
        <Component {...mergeProps({ className: classes.join(' ') }, props)}>{children}</Component>
    )
}
