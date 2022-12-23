import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Flex } from '@sigmoidgenerator/theme'

export default function Layout(): JSX.Element {
    return (
        <Flex direction="col" className="max-h-screen h-full">
            <Header />
            <main className="py-4 px-3 flex-1 lg:px-8">
                <Outlet />
            </main>
        </Flex>
    )
}
