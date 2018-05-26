class Tabuada{

    gerarTabuada(){
      //  console.log("Gerando tabuada")
    
        let numero = document.getElementById("numero").value;
       
        for (let i=1; i<=10;i=i+1){
            console.log(numero + "x" + i + "=" +  numero*i )
        }
    }

}

var tabuada = new Tabuada();