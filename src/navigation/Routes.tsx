import HomePage from '../pages/Home/Home'
import SigmoidPage from '../pages/Sigmoid/SigmoidPage'
import { RoutesConfig } from './types'
import { useTranslation } from 'react-i18next'

export const useGetRoutesConfig = (): RoutesConfig => {
    const { t } = useTranslation()
    return {
        navbar: [
            {
                path: '/',
                element: <HomePage />,
                name: t('navigation.home'),
            },
            {
                path: '/sigmoid',
                element: <SigmoidPage />,
                name: t('navigation.sigmoid'),
            },
        ],
        general: [],
    }
}
