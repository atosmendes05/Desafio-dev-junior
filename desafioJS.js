function procurarUsuario(usuarios, valor) {
    return new Promise((resolve, reject) => {
        valor = valor.toLowerCase();
        for (let usuario of usuarios) {
            const nome = usuario.nome.toLowerCase();
            const email = usuario.email.toLowerCase();
            if (nome === valor || email === valor) {
                resolve(usuario);
                return;
            }
        }
        reject("Nenhum usuário encontrado com o valor fornecido.");
    });
}

const usuarios = [
    { nome: 'Atos', idade: 22, email: 'atos@exemplo.com' },
    { nome: 'Geovanna', idade: 19, email: 'geovanna@exemplo.com' },
    { nome: 'Neto', idade: 62, email: 'neto@exemplo.com' }
];

let valorPesquisa = prompt('Digite o valor da pesquisa:');

if (valorPesquisa) {
    procurarUsuario(usuarios, valorPesquisa)
        .then(usuario => {
            console.log('Usuário encontrado:', usuario);
        })
        .catch(erro => {
            console.error('Erro:', erro);
        });
} else {
    console.error('Nenhum valor de pesquisa fornecido.');
}
