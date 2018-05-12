

class ListaConvidados{

   constructor(){
       this.qtd = 0;
       this.id = 0;
       this.ehEditar=false;
       this.idEditar="";
   }
    
    adicionar(){

        
      
        //1) Ler o input
         let nome = document.getElementById("inputConvidado").value;
        
         if (this.ehEditar==true){

            document.getElementById(this.idEditar).childNodes[0].innerText=nome;
            this.ehEditar=false;

       
        }else{
          

                //2) inclusao na lista
         //2.1) Criar os elementos dos DOM
         let lista = document.getElementById("lista");
        
         let div = document.createElement("div");  // Cria a tag <div></div>
         div.classList.add("item-lista") // adiciona a classe css <div class="item-lista"></div>
         div.id= "conv-"+this.id; //adiciona um ID
         
         let span = document.createElement("span");//<span></span>
         span.innerText=nome;//<span>Jão da Silva</span>

         let imgExc = document.createElement("img");//<img />
         imgExc.src="img/exc.svg"; //<img src="img/delete.svg"/>


         let imgEdit = document.createElement("img");//<img />
         imgEdit.src="img/edit.svg"; //<img src="img/edit.svg"/>

         //<img onclick="lista.excluir('conv-0')">
         imgExc.setAttribute("onclick",  "lista.excluir('"  +  div.id + "')" )   ;  
         imgEdit.setAttribute("onclick",  "lista.editar('"  +  div.id + "')" )   ;  

        // <img onclick="???">
   
         //2.2) Aninhar as tags
        div.appendChild(span);  //<div class="item-lista"> <span>Jão da Silva</span></div>
        div.appendChild(imgEdit); //<div class="item-lista"> <span>Jão da Silva</span> <img src="img/edit.svg"> </div>
        div.appendChild(imgExc); //<div class="item-lista"> <span>Jão da Silva</span> <img src="img/exc.svg"> </div>
       
        //2.3) Incluir na lista
        lista.appendChild(div)

         //3)Contador
         
         this.qtd =this.qtd + 1;
         this.id= this.id + 1;
        
         this.atualizarQtd();
        }
    
         this.limpar();
         

    }

    atualizarQtd(){
        let labelQtd = document.getElementById("labelQtd");
        labelQtd.innerText = this.qtd;
    }
    excluir(id){

       let  conv = document.getElementById(id);
       let lis = document.getElementById("lista");
       lis.removeChild(conv);
       this.qtd =this.qtd - 1;
       this.atualizarQtd();
    }

    editar(id){
       let nome = document.getElementById(id).childNodes[0].innerText
       document.getElementById("inputConvidado").value=nome;
       this.ehEditar=true;  //É pra editar
       this.idEditar = id;  //Quem editar
    }


    limpar(){
        document.getElementById("inputConvidado").value="";
    }

}

var lista = new ListaConvidados();


