import { useState } from 'react'
import Chart from '../../components/Chart/Chart'
import Flex from '../../components/generics/Flex'
import Parameters from '../../components/Parameters/Parameters'
import { useParameters } from '../../contexts/ParamsContext'
import { SigmoidParams } from '../../data/types'
import { useTranslation } from 'react-i18next'
import { FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SigmoidPage(): JSX.Element {
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
            className="container h-full flex-1 mx-auto flex-col flex items-center justify-center"
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
                    <Flex
                        direction="col"
                        className="card w-full h-full relative bg-base-100 border border-base-300 dark:bg-base-300"
                    >
                        <Chart params={params} />
                    </Flex>
                </div>
                <div className="w-full lg:w-4/12">
                    <Parameters value={params} onChange={handleChange} />
                </div>
            </Flex>
        </motion.section>
    )
}
