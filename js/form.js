class contato {

    constructor(nome, email, telefone, prefContato, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.prefContato = prefContato;  
        this.tipoContato = tipoContato; 
        this.mensagem = mensagem; 
    }
}

function Post(form) {

    event.preventDefault(); 

    let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("prefContato").value,
            form.elements.namedItem("tipoContato").value,
            form.elements.namedItem("mensagem").value
        )

     Validation()
}

function Validation() {
    if (prefContato.value != "COMO DESEJA SER CONTATADO*" && tipoContato.value != "TIPO DE CONTATO*") {
        Enviar();
        form.reset();
    } else {
        let mensagemErro = document.getElementById("mensagemSucessoOuErro"); 
        mensagemErro.textContent = "Você deixou de prencheer um ou mais dos campos obrigatórios. Por favor, verifique e tente novamente."; 

        mensagemErro.classList.add("mensagem-erro");

        setTimeout(function(){
            mensagemErro.textContent = "";
            mensagemErro.classList.remove("mensagem-erro");
        }, 5000); 
        }
    return;
}

function Enviar(data) {
    let mensagemSucesso = document.getElementById("mensagemSucessoOuErro"); 
    mensagemSucesso.textContent = "Obrigado, sr(a) " + nome.value + ', os seus dados foram encaminhados com sucesso!'; 

    mensagemSucesso.classList.add("mensagem-sucesso");

    setTimeout(function(){
        mensagemSucesso.textContent = "";
        mensagemSucesso.classList.remove("mensagem-sucesso");
    }, 5000); 
}