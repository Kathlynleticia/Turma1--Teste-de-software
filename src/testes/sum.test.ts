import { expect, test, describe } from 'vitest'

export function sum(a: number, b: number): number {
    return a + b
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

function somar(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os valores devem ser números')
    }

    return a + b
}

describe('Teste com valores inválidos', () => {

    test('Deve gerar erro ao receber valores inválidos', () => {
        expect(() => somar('2' as any, 3)).toThrow()
    });

    test('Deve gerar erro ao receber texto', () => {
        expect(() => somar('abc' as any, 3)).toThrow()
    });

});