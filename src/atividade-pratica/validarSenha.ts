function validarSenha(senha: string): boolean {
    if (senha.length < 6) {
        return false;
    }

    if (!/[A-Z]/.test(senha)) {
        return false;
    }

    if (!/[0-9]/.test(senha)) {
        return false;
    }

    return true;
}

