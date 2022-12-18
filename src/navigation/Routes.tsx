import { FaChartLine } from 'react-icons/fa'
import HomePage from '../pages/HomePage'
import ChartPage from '../pages/ChartPage'
import { RoutesConfig } from './types'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export const useGetRoutesConfig = (): RoutesConfig => {
    const { t } = useTranslation()
    return {
        navbar: [
            {
                path: '/',
                element: (
                    <>
                        <Helmet>
                            <title>Nomiks</title>
                        </Helmet>
                        <HomePage />
                    </>
                ),
                name: t('navigation.home'),
            },
            {
                path: '/sigmoid',
                icon: <FaChartLine />,
                element: (
                    <>
                        <Helmet>
                            <title>Nomiks - {t('navigation.sigmoid')}</title>
                        </Helmet>
                        <ChartPage />
                    </>
                ),
                name: t('navigation.sigmoid'),
            },
        ],
        general: [
            {
                path: '*',
                element: (
                    <>
                        <Helmet>
                            <title>Nomiks - 404</title>
                        </Helmet>
                        <h1>404</h1>
                    </>
                ),
            },
        ],
    }
}
