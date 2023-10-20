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

        console.log("Tipo de Unidade:", tipoUnidade);
        console.log("Unidade:", unidade);
        console.log("Nome Completo:", nomeCompleto);
        console.log("RG:", rg);
        console.log("Celular:", celular);
        console.log("Email:", email);
        console.log("Em caso de emergência procurar por:", emergencia);
        console.log("Em caso de locatário, informar nome do proprietário e telefone:", locatario);
        console.log("Demais moradores da unidade:", moradores);
        console.log("Veículos da unidade:", veiculos);
        console.log("Animais de estimação:", animais);

        alert("Dados cadastrados. Verifique o console para mais informações.");
    });
});
