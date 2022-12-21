import { SeriesParams, SigmoidParams, SigmoidSeries } from './types'

class DataServices {
    _getSeries({ start, end, step }: SeriesParams): number[] {
        const series = []

        if (start !== 0) {
            series.push(0)
        }
        let i
        for (i = start; i <= end; i += step) series.push(i)

        if (i !== end + step) series.push(end)

        return series
    }

    /**
     *
     * @param start - start of the series
     * @param end - end of the series
     * @param step	- step of the series
     * @param mean - mean of the sigmoid function
     * @param deviation - deviation of the sigmoid function
     * @param totalValue - total value of the sigmoid function
     *
     * @returns SigmoidSeries
     *
     * @example
     * const sigmoidSeries = dataService.sigmoidSeries({
     * 		start: 0,
     * 		end: 100,
     * 		step: 10,
     * 		mean: 0.1,
     * 		deviation: 50,
     * 		totalValue: 100,
     * })
     */
    sigmoidSeries({ start, end, step, mean, deviation, totalValue }: SigmoidParams): SigmoidSeries {
        step = Math.floor((end - start) / 10)
        const sigmoid = (x: number) => {
            if (x <= 0) return 0
            if (x === end - start) return totalValue

            return (1 / (1 + Math.exp(-mean * (x - deviation)))) * totalValue
        }

        const series = this._getSeries({ start, end, step })
        const sigmoidSeries: SigmoidSeries = []
        series.forEach((x) => {
            sigmoidSeries.push({ x, value: sigmoid(x - start) })
        })
        return sigmoidSeries
    }
}

const dataService = new DataServices()

export { dataService }
