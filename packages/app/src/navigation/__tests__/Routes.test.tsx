import { renderHook } from '@testing-library/react'
import { useGetRoutesConfig } from '../Routes'

const makeSut = () => {
    return renderHook(() => useGetRoutesConfig())
}

describe('useGetRoutesConfig', () => {
    test('Should get routes correctly', () => {
        const { result } = makeSut()

        expect(result.current.navbar.length).toBeGreaterThan(0)
        expect(result.current.general.length).toBeGreaterThan(0)
    })
})
