document.addEventListener("DOMContentLoaded", function() {
    const cadastroForm = document.getElementById("cadastro-form");
    const cadastrarButton = document.getElementById("cadastrar-button");

    cadastrarButton.addEventListener("click", function() {
        const tipoUnidade = document.querySelector('input[name="tipo_unidade"]:checked').value;
        const unidade = document.getElementById("unidade").value;
        const nomeCompleto = document.getElementById("nome_completo").value;
        const rg = document.getElementById("rg").value;
        const celular = document.getElementById("celular").value;
        const email = document.getElementById("email").value;
        const emergencia = document.getElementById("emergencia").value;
        const locatario = document.getElementById("locatario").value;
        const moradores = document.getElementById("moradores").value;
        const veiculos = document.getElementById("veiculos").value;
        const animais = document.getElementById("animais").value;

        // Criar um objeto com os dados
        const dados = {
            tipoUnidade: tipoUnidade,
            unidade: unidade,
            nomeCompleto: nomeCompleto,
            rg: rg,
            celular: celular,
            email: email,
            emergencia: emergencia,
            locatario: locatario,
            moradores: moradores,
            veiculos: veiculos,
            animais: animais
        };

        // Converter o objeto em uma string JSON
        const dadosJSON = JSON.stringify(dados);

        // Enviar os dados para o Console do Inspetor do Google Chrome
        console.log(dadosJSON);

        alert("Dados cadastrados. Verifique o console do Inspetor do Google Chrome para mais informações.");
    });
});
