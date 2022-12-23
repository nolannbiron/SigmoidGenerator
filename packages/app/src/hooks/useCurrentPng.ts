// https://github.com/brammitch/recharts-to-png

/* eslint-disable @typescript-eslint/no-explicit-any */
import html2canvas, { Options } from 'html2canvas'
import { useCallback, useRef, useState } from 'react'

export type UseCurrentPng = {
    getPng: () => Promise<string | undefined>
    isLoading: boolean
    ref: React.MutableRefObject<any>
}

/**
 * Hook to download a PNG of the current chart
 * @param options - Options for html2canvas
 * @returns [getPng, { isLoading, ref }]
 * @example
 * const [getPng, { isLoading, ref }] = useCurrentPng()
 * return (
 * <div ref={ref}>
 * 	<LineChart data={data} />
 * 	<button onClick={getPng}>Get PNG</button>
 * </div>
 * )
 **/
export function useCurrentPng(options?: Partial<Options>): UseCurrentPng {
    const ref = useRef<any>()
    const [isLoading, setIsLoading] = useState(false)

    const getPng = useCallback(async () => {
        if (ref !== null && ref?.current?.container) {
            setIsLoading(true)

            return await html2canvas(ref.current.container as HTMLElement, {
                logging: false,
                ...options,
            }).then((canvas) => {
                setIsLoading(false)
                return canvas.toDataURL('image/png', 1.0)
            })
        }
    }, [options])

    return {
        getPng,
        ref,
        isLoading,
    }
}
