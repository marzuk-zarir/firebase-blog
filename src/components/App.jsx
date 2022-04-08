import MediaQuery from 'react-responsive'
import { Route, Routes } from 'react-router-dom'
import { OffcanvasNavProvider } from '../contexts/OffcanvasNavProvider'
import Header from './Common/Header'
import OffcanvasNav from './Common/OffcanvasNav'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

export default function App() {
    return (
        <OffcanvasNavProvider>
            <Header />

            <MediaQuery maxWidth={1023}>
                <OffcanvasNav />
            </MediaQuery>

            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </OffcanvasNavProvider>
    )
}
