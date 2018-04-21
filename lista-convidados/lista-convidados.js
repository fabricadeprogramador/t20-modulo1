

class ListaConvidados{

   constructor(){
       this.qtd = 0;
   }
    
    adicionar(){
      
        //1) Ler o input
         let nome = document.getElementById("inputConvidado").value;
        //2) inclusao na lista
         
        //2.1) Criar os elementos dos DOM
         let lista = document.getElementById("lista");
        
         let div = document.createElement("div");  // <div></div>
         div.classList.add("item-lista") // <div class="item-lista"></div>
        
         let span = document.createElement("span");//<span></span>
         span.innerText=nome;//<span>Jão da Silva</span>

         let img = document.createElement("img");//<img />
         img.src="img/delete.svg"; //<img src="img/delete.svg"/>

         //2.2) Aninhar as tags
        div.appendChild(span);  //<div class="item-lista"> <span>Jão da Silva</span></div>
        div.appendChild(img); //<div class="item-lista"> <span>Jão da Silva</span> <img src="img/delete.svg"> </div>

        //2.3) Incluir na lista
        lista.appendChild(div)

         //3)Contador
         
         this.qtd =this.qtd + 1;

         //4)Inserir quantidade no label
         let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = this.qtd;

    }



}

var lista = new ListaConvidados();


