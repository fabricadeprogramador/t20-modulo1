class Tabuada{

    gerarTabuada(){
      //  console.log("Gerando tabuada")
    
        let numero = document.getElementById("numero").value;
        let divTabuada =  document.getElementById("tabuada")
        for (let i=1; i<=10;i=i+1){
            let div =  document.createElement("div");
            div.innerText = numero + "x" + i + "=" +  numero*i 
            divTabuada.appendChild(div)
        }
    }

}

var tabuada = new Tabuada();