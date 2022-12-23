export type SeriesParams = {
    start: number
    end: number
    step: number
}

export type SigmoidParams = {
    start: number
    end: number
    step: number
    mean: number
    deviation: number
    totalValue: number
}

export type SigmoidSerie = { x: number; value: number }
export type SigmoidSeries = SigmoidSerie[]
