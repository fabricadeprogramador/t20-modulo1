class ListaNumeros{

    constructor(){
        this.numeros=[];
    }

    adicionar(){
        let n = parseInt(document.getElementById("n").value);
        this.numeros.push(n);
    }

    imprimirNumeros(){
        
        let el = document.getElementById("lista");
        
        let texto = el.innerText;

        texto= "";

        for (let i = 0  ;   i<this.numeros.length  ; i=i+1){
            if(i==0){
             texto= this.numeros[i];
            }else{
                texto= texto+","+this.numeros[i];
            }

        }
    
        el.innerText = texto;
    }


    imprimirNumerosSequencias(){
        // ler o numero digitado
        let n = parseInt(document.getElementById("n").value);
        //exibir numeros de 1 a N

        let el = document.getElementById("lista");
        
        let texto = el.innerText;

        texto= 2;

        for (let v = 4  ;   v<=n  ; v=v+2){

         texto= texto+","+v;

        }
    
        el.innerText = texto;
    }

}

var listaNumeros =  new ListaNumeros();