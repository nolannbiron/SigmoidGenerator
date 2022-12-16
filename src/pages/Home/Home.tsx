import { useTranslation } from 'react-i18next'
import Flex from '../../components/generics/Flex'
import { FaGithub } from 'react-icons/fa'
import { useColorMode, useTranslationContext } from '../../contexts/AppContext'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

export default function HomePage(): JSX.Element {
    const { t } = useTranslation()
    const { countryCode, setCountryCode } = useTranslationContext()
    const { toggleColorMode, colorMode } = useColorMode()

    const toggleCountryCode = () => {
        setCountryCode(countryCode === 'fr-FR' ? 'en-US' : 'fr-FR')
    }

    return (
        <>
            <Flex direction="col" align="center" justify="center" className="container h-full flex-1 mx-auto">
                <div className="text-5xl text-center mb-5 font-bold">{t('home.welcome')}</div>
                <div className="text-base mx-auto max-w-4xl text-base-content/80 px-10 text-center mb-5 font-bold">
                    {t('home.description')}
                </div>

                <Flex className="gap-4 mt-8">
                    <a href="" className="btn gap-3 text-white btn-ghost bg-black">
                        <FaGithub /> Github
                    </a>
                    <button onClick={toggleColorMode} className="btn btn-secondary gap-3">
                        {colorMode !== 'dark' ? <BsMoonFill className="h-4" /> : <BsSunFill className="h-4" />}
                        {t('colorMode.toggle', {
                            mode: t(`colorMode.${colorMode === 'dark' ? 'light' : 'dark'}`),
                        })}
                    </button>
                    <button onClick={toggleCountryCode} className="btn btn-secondary">
                        {t(`language.toggle.${countryCode === 'fr-FR' ? 'english' : 'french'}`)}
                    </button>
                </Flex>
            </Flex>
        </>
    )
}
