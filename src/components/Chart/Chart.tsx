import { useEffect, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { dataService } from '../../data/DataServices'
import { SigmoidParams, SigmoidSerie } from '../../data/types'
import { useColorModeValue } from '../../contexts/AppContext'
import { useCurrentPng } from '../../hooks/useCurrentPng'
import FileSaver from 'file-saver'
import Flex from '../generics/Flex'
import DownloadDropdown from './DownloadDropdown'

interface Props {
    params: SigmoidParams
}

function roundUp(num: number) {
    return Math.ceil(num / 1000) * 1000
}

export default function Chart({ params }: Props): JSX.Element {
    const [canDownload, setCanDownload] = useState(false)
    const series = useMemo(() => dataService.sigmoidSeries(params), [params])
    const [getPng, { ref }] = useCurrentPng()

    useEffect(() => {
        setTimeout(() => {
            setCanDownload(true)
        }, 1500)
    }, [])

    const data = useMemo(
        () =>
            series.map((serie: SigmoidSerie) => ({
                value: serie.value.toString(),
                x: serie.x,
            })),
        [series]
    )

    const handleDownloadImage = async () => {
        const png = await getPng()
        if (!png) return
        return FileSaver.saveAs(png, `sigmoid-${new Date().getTime()}.png`)
    }

    const handleDownloadCsv = async () => {
        const csv = series.reduce((acc, serie) => `${acc}${serie.x},${serie.value}\n`, 'x, value\n')
        const blob = new Blob([csv], { type: 'text/csv' })
        return FileSaver.saveAs(blob, `sigmoid-${new Date().getTime()}.csv`)
    }

    const handleDownload = async (type: 'image' | 'csv') =>
        type === 'image' ? handleDownloadImage() : handleDownloadCsv()

    return (
        <>
            <ResponsiveContainer width="100%" height="100%" className="min-h-[500px]">
                <LineChart
                    ref={ref}
                    data={data}
                    height={500}
                    margin={{
                        top: 20,
                        right: 25,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis
                        //using Math.random() to force re-rendering of the component
                        key={Math.random()}
                        label={{ value: 'x', position: 'insideLeft' }}
                        dataKey="x"
                        height={50}
                    />
                    <YAxis
                        key={Math.random()}
                        label={{ value: 'value', position: 'insideBottom', offset: -5 }}
                        domain={[0, roundUp(params.totalValue)]}
                        dataKey="value"
                        width={80}
                    />
                    <Tooltip contentStyle={{ background: useColorModeValue('#fff', '#161819'), borderRadius: 10 }} />
                    <Line type="monotone" dataKey="value" stroke={useColorModeValue('#463aa1', '#93c5fd')} />
                </LineChart>
            </ResponsiveContainer>
            <Flex className="relative mb-4" justify="center">
                <DownloadDropdown onDownload={handleDownload} canDownload={canDownload} />
            </Flex>
        </>
    )
}
