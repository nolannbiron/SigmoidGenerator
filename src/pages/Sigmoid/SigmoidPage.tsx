import { useState } from 'react'
import Chart from '../../components/Chart/Chart'
import Flex from '../../components/generics/Flex'
import Parameters from '../../components/Parameters/Parameters'
import { useParameters } from '../../contexts/ParamsContext'
import { SigmoidParams } from '../../data/types'

export default function SigmoidPage(): JSX.Element {
    const { state, dispatch } = useParameters()
    const [params, setParams] = useState<SigmoidParams>(state)

    // updates the state of the page and the context
    const handleChange = (key: keyof SigmoidParams, value: SigmoidParams[keyof SigmoidParams]) => {
        setParams({ ...params, [key]: value })
        dispatch({ ...state, [key]: value })
    }

    return (
        <div className="container mx-auto mt-5">
            <div className="text-3xl mb-5 font-bold">Sigmoid</div>
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
        </div>
    )
}
