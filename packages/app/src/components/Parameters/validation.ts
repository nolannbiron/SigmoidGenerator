import z from 'zod'

export const parametersFormSchema = z.object({
    start: z.number().min(0),
    end: z.number().min(0),
    mean: z.number().min(0),
    deviation: z.number().min(0),
    totalValue: z.number().min(0),
})

export type ParametersFormSchema = z.infer<typeof parametersFormSchema>

export type ParametersFormErrors = {
    [key in keyof ParametersFormSchema]?: string | string[]
}
