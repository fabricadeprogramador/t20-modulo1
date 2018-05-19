class ListaNumeros{


    imprimirNumeros(){
        // ler o numero digitado
        let n = parseInt(document.getElementById("n").value);
        //exibir numeros de 1 a N

        let el = document.getElementById("lista");
        
        let texto = el.innerText;

        texto= 1;

        for (let v = 2  ;   v<=n  ; v=v+1){

         texto= texto+","+v;

        }
    
        el.innerText = texto;
    }

}

var listaNumeros =  new ListaNumeros();