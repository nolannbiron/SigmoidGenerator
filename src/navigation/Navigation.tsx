import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { useGetRoutesConfig } from './Routes'
import { AnimatePresence } from 'framer-motion'

export default function Navigation(): JSX.Element {
    const location = useLocation()
    const { general, navbar } = useGetRoutesConfig()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes key={location.pathname} location={location}>
                <Route element={<Layout />} path="/">
                    <>
                        {general.map((route, index) => (
                            <Route key={`general-route-${index}`} path={route.path} element={route.element} />
                        ))}

                        {Object.values(navbar)
                            .flatMap((routes) => routes)
                            .map((route) => (
                                <Route key={`navbar-route-${route.name}`} path={route.path} element={route.element} />
                            ))}
                    </>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
