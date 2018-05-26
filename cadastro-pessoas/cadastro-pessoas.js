class CadastroPessoas{

    constructor(){
        this.pessoas = [];
    }

    adicionar(){

        let nomeTela =  document.getElementById("nome").value;
        let sexoTela = document.querySelector("[name=sexo]:checked").value
       
        let p = {nome:nomeTela, sexo:sexoTela}
        this.pessoas.push(p) 
    }
}

var cadastro =  new CadastroPessoas();