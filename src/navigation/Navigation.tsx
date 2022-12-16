import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { useGetRoutesConfig } from './Routes'

export default function Navigation(): JSX.Element {
    const { general, navbar } = useGetRoutesConfig()

    const routes = [...general, ...navbar.filter(({ hidden }) => !hidden)]

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: routes,
        },
    ])

    return <RouterProvider router={router} />
}
