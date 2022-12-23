import ReactCountryFlag from 'react-country-flag'
import { useApp } from '../../contexts/AppContext'
import { Dropdown, DropdownItems, useTheme } from '@sigmoidgenerator/theme'
import { useTranslation } from 'react-i18next'
import { BsMoonFill, BsSunFill, BsThreeDots } from 'react-icons/bs'

export default function OptionsDropdown(): JSX.Element {
    const { t } = useTranslation()
    const { state, dispatch } = useApp()
    const { colorMode, toggleColorMode } = useTheme()

    const items: DropdownItems = [
        {
            label: t('colorMode.toggle', {
                mode: t(`colorMode.${colorMode === 'dark' ? 'light' : 'dark'}`),
            }),
            icon: colorMode !== 'dark' ? <BsMoonFill className="h-4" /> : <BsSunFill className="h-4" />,
            onClick: (e) => {
                e.preventDefault()
                toggleColorMode()
            },
        },
        {
            label: 'Langue',
            children: [
                {
                    label: t('language.french'),
                    icon: <ReactCountryFlag countryCode="FR" svg />,
                    isActive: state.countryCode === 'fr-FR',
                    onClick: () => {
                        dispatch({ type: 'setCountryCode', payload: 'fr-FR' })
                    },
                },
                {
                    label: t('language.english'),
                    icon: <ReactCountryFlag countryCode="US" svg />,
                    isActive: state.countryCode === 'en-US',
                    onClick: () => {
                        dispatch({ type: 'setCountryCode', payload: 'en-US' })
                    },
                },
            ],
        },
    ]

    return <Dropdown position="right" icon={<BsThreeDots />} items={items} />
}
