class Cadastro{


    validar(){

        //1) Leitura dos inputs

        let mensagemValidacao = "";

        let nome  = document.getElementById("nome").value;
        let email  = document.getElementById("email").value;
       
        let sexo  = document.querySelector("[name=sexo]:checked");
        let curso  = document.querySelector("[name=curso]:checked");

        let estado  = document.getElementById("estado").value;
        let foto  = document.getElementById("foto").files[0];
       
        //2) Validação dos campos
        if (nome==""){
            mensagemValidacao += "Preencha o campo nome!\n";
        }

        if (email==""){
           mensagemValidacao += "Preencha o campo e-mail\n";
        }

        if (sexo==null){
           mensagemValidacao += "Preencha o campo sexo\n";
        }

        if (curso==null){
            mensagemValidacao += "Selecione pelo menos um curso de interesse!\n";
        }

        if (estado==""){
            mensagemValidacao += "Selecione um estado\n";
        }

        if(foto==undefined){
           mensagemValidacao += "Selecione uma foto\n";
        }else if (foto.size>1048576){
            mensagemValidacao += "A foto deve ter no máximo 1MB\n";
        }else if (   foto.type!="image/jpeg"  &&  foto.type!="image/png"){
            mensagemValidacao += "Foto formato inválido";
        }

        if (mensagemValidacao!=""){
            window.alert(mensagemValidacao);
        }

    }
}

var cadastro = new Cadastro();