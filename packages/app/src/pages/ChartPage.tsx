import { useState } from 'react'
import Chart from '../components/Chart/Chart'
import Parameters from '../components/Parameters/Parameters'
import { useParameters } from '../contexts/ParamsContext'
import { SigmoidParams } from '../data/types'
import { useTranslation } from 'react-i18next'
import { FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Flex, Card } from '@sigmoidgenerator/theme'

export default function ChartPage(): JSX.Element {
    const { t } = useTranslation()
    const { state, dispatch } = useParameters()
    const [params, setParams] = useState<SigmoidParams>(state)

    // updates the state of the page and the context
    const handleChange = (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => {
        setParams({ ...params, [key]: value })
        dispatch({ ...state, [key]: value })
    }

    return (
        <motion.section
            className="container h-full flex-1 mx-auto flex flex-col items-start lg:justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-3xl mb-5 flex items-center gap-3 font-bold">
                <FaChartLine />
                {t('navigation.sigmoid')}
            </div>
            <Flex direction="col-reverse" className="lg:flex-row w-full gap-4 lg:gap-8">
                <div className="w-full lg:w-8/12 relative">
                    <Card className="flex-col min-w-full">
                        <Chart params={params} />
                    </Card>
                </div>
                <div className="w-full lg:w-4/12">
                    <Parameters value={params} onChange={handleChange} />
                </div>
            </Flex>
        </motion.section>
    )
}
