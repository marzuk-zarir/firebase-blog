import { createRef, useCallback, useEffect } from 'react'
import MediaQuery from 'react-responsive'
import Column from '../Column'
import Container from '../Container'
import Row from '../Row'
import Brand from './Brand'
import Menubar from './Menubar'
import Navbar from './Navbar'

export default function Header() {
    const headerRef = createRef()

    const blurHandler = useCallback(() => {
        if (window.scrollY > headerRef.current.clientHeight) {
            headerRef.current.classList.add('bg-indigo-500/40')
        } else {
            headerRef.current.classList.remove('bg-indigo-500/40')
        }
    }, [headerRef])

    useEffect(() => {
        blurHandler()
        window.addEventListener('scroll', blurHandler)

        return () => {
            window.removeEventListener('scroll', blurHandler)
        }
    }, [blurHandler])

    return (
        <header
            className="py-[0.875rem] transition-colors top-0 sticky backdrop-filter backdrop-blur-sm"
            ref={headerRef}
        >
            <Container>
                <Row vCenter>
                    <Column cols="3" lg="2" xl="3">
                        <Brand />
                    </Column>
                    <MediaQuery minWidth={1024}>
                        <Column as="nav" className="flex justify-center items-center">
                            <Navbar />
                        </Column>
                    </MediaQuery>
                    <Column cols="9" lg="3" className="flex items-center justify-end">
                        <Menubar />
                    </Column>
                </Row>
            </Container>
        </header>
    )
}
