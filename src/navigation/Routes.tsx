import { FaChartLine } from 'react-icons/fa'
import HomePage from '../pages/Home/Home'
import SigmoidPage from '../pages/Sigmoid/SigmoidPage'
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
                        <SigmoidPage />
                    </>
                ),
                name: t('navigation.sigmoid'),
            },
        ],
        general: [],
    }
}
