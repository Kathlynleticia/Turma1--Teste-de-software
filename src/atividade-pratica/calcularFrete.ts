function calcularFrete(valorCompra: number): number {
    if (valorCompra < 0) {
        throw new Error("Valor da compra inválido");
    }

    if (valorCompra >= 200) {
        return 0;
    }

    if (valorCompra >= 100) {
        return 10;
    }

    return 20;
}