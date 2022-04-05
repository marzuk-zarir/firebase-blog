import MediaQuery from 'react-responsive'
import Column from '../Column'
import Container from '../Container'
import Row from '../Row'
import Brand from './Brand'
import Menubar from './Menubar'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="py-[0.875rem]">
            <Container>
                <Row vCenter>
                    <Column cols="3">
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
