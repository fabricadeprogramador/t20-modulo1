

class ListaConvidados{

   constructor(){
       this.qtd = 0;
   }
    
    adicionar(){
      
        //1) Ler o input
         let nome = document.getElementById("inputConvidado").value;
        //2) inclusao na lista
         let lista = document.getElementById("lista");
         lista.innerText= lista.innerText + "\n"+ nome;
         
         //3)Contador
         
         this.qtd =this.qtd + 1;

         //4)Inserir quantidade no label
         let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = this.qtd;

    }



}

var lista = new ListaConvidados();


