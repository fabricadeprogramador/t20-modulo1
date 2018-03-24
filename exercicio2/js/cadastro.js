class Cadastro{


    validar(){

        //1) Leitura dos inputs

        let nome  = document.getElementById("nome").value;
        let email  = document.getElementById("email").value;
       
        let sexo  = document.querySelector("[name=sexo]:checked");
        let curso  = document.querySelector("[name=curso]:checked");

        let estado  = document.getElementById("estado").value;
        let foto  = document.getElementById("foto").files[0];
       
        //2) Validação dos campos
        if (nome==""){
            window.alert("Preencha o campo nome!");
        }

        if (email==""){
            window.alert("Preencha o campo e-mail");
        }

        if (sexo==null){
            window.alert("Preencha o campo sexo");
        }

        if (curso==null){
            window.alert("Selecione pelo menos um curso de interesse!")
        }

        if (estado==""){
            window.alert("Selecione um estado");
        }

        if(foto==undefined){
            window.alert("Selecione uma foto");
        }else if (foto.size>1048576){
            window.alert("A foto deve ter no máximo 1MB");
        }else if (   foto.type!="image/jpeg"  &&  foto.type!="image/png"){
                window.alert("Foto formato inválido")
        }
    }
}

var cadastro = new Cadastro();