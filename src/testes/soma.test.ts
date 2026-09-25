import { expect, test, describe } from 'vitest'

function somar(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') { 
        throw new Error('Os valores devem ser números')
    }

    return a + b
}

/*
A função recebe dois parametros do tipo number e retorna um number.
A condição entre paresenteses diz algo como "Se o tipo de a for diferente de 'number' || (OU) o tipo de b for diferente de 'number' retorne isso."
'number' aparece como uma string, isso porque o typeof retorna uma string com o tipo da variável escrito.
Caso o typeof retorne 'string' então será executado o que tem dentro if, senão ele retorna a soma.
*/

describe('Teste com valores inválidos', () => {

    test('Deve gerar erro ao receber valores inválidos', () => {
        expect(() => somar('2' as any, 3)).toThrow()
    });

    test('Deve gerar erro ao receber texto', () => {
        expect(() => somar('abc' as any, 3)).toThrow()
    });

});

/*
Aqui, a gente está criando uma função que funciona como callback e, dentro dela, colocamos a chamada da função somar. 
Isso é importante porque, se colocássemos somar('2' as any, 3) diretamente no expect, a função somar seria executada 
imediatamente, antes que o toThrow() pudesse verificar o que aconteceu. Ao colocarmos somar dentro de uma função callback, 
estamos apenas entregando essa função para o expect/toThrow, sem executá-la naquele momento. 
Quando o teste é executado, o toThrow() chama essa callback e, nesse momento, a função somar é executada. Como ela recebe 
um valor que não é number, o if é acionado e ela lança um Error. O toThrow() então verifica justamente se essa execução 
lançou um erro e, como lançou, o teste passa.
*/

/*
Quando usamos as any, estamos dizendo ao TypeScript para ignorar, naquele ponto, a tipagem que normalmente seria verificada.
Nesse caso, a função somar foi definida para receber apenas números, então normalmente o TypeScript não permitiria somar('2', 3), 
porque '2' é uma string e o parâmetro a foi definido como number. Ao escrever somar('2' as any, 3), estamos dizendo ao TypeScript: 
“considere esse valor como any e não faça a verificação específica de tipo aqui”. O any permite que aquele valor seja tratado como 
podendo ser qualquer tipo, o que possibilita passar a string mesmo que a função tenha sido definida para receber um number. Isso acontece 
durante o desenvolvimento e a verificação/compilação do TypeScript: o as any existe para o TypeScript e não para o JavaScript em execução. 
Quando o código TypeScript é transformado em JavaScript, as any é removido, assim como as anotações de tipo number, string etc. 
Portanto, em tempo de execução, o JavaScript recebe simplesmente o valor '2'. É justamente por isso que esse teste é interessante: 
estamos forçando uma situação que o TypeScript normalmente impediria para verificar se a própria função possui uma proteção em tempo de execução. 
A função recebe '2', e aí o typeof consegue identificar que aquele valor é uma string, fazendo o throw acontecer.
*/