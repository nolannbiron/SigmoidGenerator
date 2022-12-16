import Flex from '../generics/Flex'
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
import { useState } from 'react'
import { availableRegions, countries, AvailableCountryCode, AvailableRegion } from '../../i18n'
import { useApp } from '../../contexts/AppContext'

export default function ChangeLanguage(): JSX.Element {
    const { i18n } = useTranslation()
    const {
        state: { countryCode },
        dispatch: dispatchApp,
    } = useApp()
    const [isEditing, setIsEditing] = useState(false)
    const languageRegion = countries[countryCode].region

    const handleChange = (region: AvailableRegion) => {
        if (availableRegions.includes(region)) {
            const newCountryCode = (Object.keys(countries) as AvailableCountryCode[]).find(
                (countryCode) => countries[countryCode].region === region
            )
            if (newCountryCode) {
                i18n.changeLanguage(countries[newCountryCode].language)
                dispatchApp({ type: 'setCountryCode', payload: newCountryCode })
            }
        }
        setIsEditing(false)
    }

    return (
        <Flex direction="row" justify="center" align="center" className="relative h-6 w-6">
            <ReactCountryFlag
                countryCode={languageRegion}
                style={{ height: '100%', width: '100%' }}
                onClick={() => setIsEditing(!isEditing)}
                svg
            />

            <Flex
                direction="col"
                className={`absolute bottom-0 transform transition-all duration-500 ease-in-out ${
                    isEditing ? 'visible translate-y-10 opacity-100' : 'invisible opacity-0'
                }`}
            >
                {availableRegions.map(
                    (region) =>
                        region !== languageRegion && (
                            <ReactCountryFlag
                                countryCode={region}
                                style={{ height: '100%', width: '100%' }}
                                svg
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    handleChange(region)
                                }}
                            />
                        )
                )}
            </Flex>
        </Flex>
    )
}
