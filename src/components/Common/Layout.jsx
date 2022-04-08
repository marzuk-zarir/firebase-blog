import Container from './Container'

export default function Layout({ children, ...props }) {
    return (
        <main {...props}>
            <Container>{children}</Container>
        </main>
    )
}
