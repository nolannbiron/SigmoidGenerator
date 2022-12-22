import { useContext } from 'react'
import { ThemeContext } from '@/context'

/**
 *
 * @param light string
 * @param dark string
 * @returns string
 *
 * @example
 * const bg = useColorModeValue('white', 'black')
 * const color = useColorModeValue('black', 'white')
 *
 * <div style={{ background: bg, color: color }}>
 * 	<></>
 * </div>
 */
export const useColorModeValue = (light: string, dark: string) => {
    const { state } = useContext(ThemeContext)
    return state.colorMode === 'dark' ? dark : light
}
