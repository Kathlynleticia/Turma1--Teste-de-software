function classificarIdade(idade: number): string {
    if (idade < 0) {
        throw new Error("Idade inválida");
    }

    if (idade <= 12) {
        return "Criança";
    }

    if (idade <= 17) {
        return "Adolescente";
    }

    if (idade <= 59) {
        return "Adulto";
    }

    return "Idoso";
}