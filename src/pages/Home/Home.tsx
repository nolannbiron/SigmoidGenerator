import { useTranslation } from 'react-i18next'
import Flex from '../../components/generics/Flex'
import { FaChartLine, FaGithub } from 'react-icons/fa'
import { useColorMode, useTranslationContext } from '../../contexts/AppContext'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomePage(): JSX.Element {
    const { t } = useTranslation()
    const { countryCode, setCountryCode } = useTranslationContext()
    const { toggleColorMode, colorMode } = useColorMode()

    const toggleCountryCode = () => {
        setCountryCode(countryCode === 'fr-FR' ? 'en-US' : 'fr-FR')
    }

    return (
        <motion.section
            className="container h-full flex-1 mx-auto flex-col flex items-center justify-center"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-4xl sm:text-5xl text-center mb-5 font-bold">{t('home.welcome')}</div>
            <div className="text-base mx-auto max-w-4xl text-base-content/80 sm:px-10 text-center mb-5 font-bold">
                {t('home.description')}
            </div>

            <Link to="/sigmoid" className="btn gap-3 w-full sm:w-fit btn-info">
                <FaChartLine /> {t('button.chart')}
            </Link>

            <Flex direction="row" wrap="wrap" className="sm:flex-nowrap gap-4 mt-4 sm:mt-12">
                <a
                    href="https://github.com/nolannbiron/test-nomiks"
                    target="_blank"
                    className="btn gap-3 w-full sm:w-fit text-white btn-ghost bg-black"
                >
                    <FaGithub /> Github
                </a>
                <button onClick={toggleColorMode} className="btn btn-secondary gap-3 w-full sm:w-[250px]">
                    {colorMode !== 'dark' ? <BsMoonFill className="h-4" /> : <BsSunFill className="h-4" />}
                    {t('colorMode.toggle', {
                        mode: t(`colorMode.${colorMode === 'dark' ? 'light' : 'dark'}`),
                    })}
                </button>
                <button onClick={toggleCountryCode} className="btn btn-secondary w-full sm:w-fit">
                    {t(`language.toggle.${countryCode === 'fr-FR' ? 'english' : 'french'}`)}
                </button>
            </Flex>
        </motion.section>
    )
}
