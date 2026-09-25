import { expect, test, describe} from "vitest"

function login(username: string, password: string): boolean{
    return username === 'patati' && password === '123456';
}

test('deve permitir login com usuário e senha correta', () => {
    const efetuandoLogin = login('patati', '123456')
    expect(efetuandoLogin).toBe(true)
});

describe('Negar Login com usuário e senha incorreta', () => {
    
    test('Negar login com senha incorreta', ()=> {
        const efetuandoLogin = login('patati', '2563')
        expect(efetuandoLogin).toBe(false)
    })


    test('Negar login com usuário incorreto', ()=> {
        const efetuandoLogin = login('joãoflamengomeuamor', '123456')
        expect(efetuandoLogin).toBe(false)
    })

    test('Negar login com usuário e senha incorretos', ()=> {
        const efetuandoLogin = login('joãoflamengomeuamor', '2563')
        expect(efetuandoLogin).toBe(false)
    })

    test('Negar login com campos vazios', ()=> {
        const efetuandoLogin = login('', '')
        expect(efetuandoLogin).toBe(false)
    })

})