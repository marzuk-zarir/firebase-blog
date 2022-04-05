import Container from './Container'
import Header from './Header'

export default function Layout({ children, ...props }) {
    return (
        <>
            <Header />
            <main {...props}>
                <Container>{children}</Container>
            </main>
        </>
    )
}
