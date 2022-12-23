import { useTranslation } from 'react-i18next'
import { FaChartLine, FaGithub } from 'react-icons/fa'
import { useTranslationContext } from '../contexts/AppContext'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Button, useTheme, Flex } from '@sigmoidgenerator/theme'
import ReactCountryFlag from 'react-country-flag'
import { Link } from 'react-router-dom'

export default function HomePage(): JSX.Element {
    const { t } = useTranslation()
    const { countryCode, setCountryCode } = useTranslationContext()
    const { toggleColorMode, colorMode } = useTheme()

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

            <Link to="/sigmoid">
                <Button variant="info" className="sm:w-fit">
                    <FaChartLine size={18} /> {t('button.chart')}
                </Button>
            </Link>

            <Flex direction="row" wrap="wrap" className="sm:flex-nowrap gap-4 mt-4 sm:mt-12">
                <Button
                    as="a"
                    variant="ghost"
                    href="https://github.com/nolannbiron/test-nomiks"
                    target="_blank"
                    className="w-full sm:w-fit text-white bg-black"
                >
                    <FaGithub size={16} /> Github
                </Button>
                <Button onClick={toggleColorMode} variant="secondary" className="w-full sm:w-[250px]">
                    {colorMode !== 'dark' ? <BsMoonFill size={16} /> : <BsSunFill size={16} />}
                    {t('colorMode.toggle', {
                        mode: t(`colorMode.${colorMode === 'dark' ? 'light' : 'dark'}`),
                    })}
                </Button>
                <Button variant="secondary" onClick={toggleCountryCode} className="w-full sm:w-fit">
                    <ReactCountryFlag countryCode={countryCode === 'fr-FR' ? 'us' : 'fr'} svg />
                    {t(`language.toggle.${countryCode === 'fr-FR' ? 'english' : 'french'}`)}
                </Button>
            </Flex>
        </motion.section>
    )
}
