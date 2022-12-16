import Dropdown from '../generics/Dropdown'
import ReactCountryFlag from 'react-country-flag'
import { useApp } from '../../contexts/AppContext'
import { DropdownItems } from '../generics/DropdownItem'
import { useTranslation } from 'react-i18next'
import { BsMoonFill, BsSunFill, BsThreeDots } from 'react-icons/bs'

export default function OptionsDropdown(): JSX.Element {
    const { t } = useTranslation()
    const { state, dispatch } = useApp()

    const items: DropdownItems = [
        {
            label: t('colorMode.toggle', {
                mode: t(`colorMode.${state.colorMode === 'dark' ? 'light' : 'dark'}`),
            }),
            icon: state.colorMode !== 'dark' ? <BsMoonFill className="h-4" /> : <BsSunFill className="h-4" />,
            onClick: (e) => {
                e.preventDefault()
                dispatch({ type: 'setcolorMode', payload: state.colorMode === 'dark' ? 'light' : 'dark' })
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

    return <Dropdown icon={<BsThreeDots />} items={items} />
}
