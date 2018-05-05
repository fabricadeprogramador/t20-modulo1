class Carro{
     constructor(){
         this.maior=0;
         this.menor = 3000;
         this.media = 0;
         this.qtd = 0;
         this.soma = 0;
         this.anos =[]; //array, vetor
     }
    adicionar(){
        this.qtd++;
        //1) Ler os dados
        let marca =  document.getElementById("marca").value;
        let modelo =  document.getElementById("modelo").value;
        let ano =  parseInt(document.getElementById("ano").value);
        this.anos.push(ano); //inserir no vetor
       
        //2) Criar 2 elementos  de tags
            //2.1) Inserir Texto (marca, modelo, ano)
           let divCarro= document.createElement("div");
            divCarro.innerText = marca + " / " +  modelo +" /"+ ano;
            //2.2)Inserir Imagem (icone de lixo)
            let imgCarro =  document.createElement("img")
            imgCarro.src="http://htcursos.com/logo.png";
            imgCarro.classList.add("excluir");

            divCarro.appendChild(imgCarro)

             //3) Incluir elementos no DOM
            //3.1) Leitura do div lista-carros
            let divLista = document.getElementById("lista-carros")
            //3.2) Inserir os elementos criados na DIV
            divLista.appendChild(divCarro)

            

    }

    gerarRelatorio(){
       
        //1)calculo do maior e menor
    
        for (let i=0 ; i < this.qtd; i++){ //Loop
            let anoVet = this.anos[i]; 
           
            if (anoVet >  this.maior){
                this.maior = anoVet;
            }
          
            if (anoVet < this.menor){
                this.menor = anoVet;
            }
        }
      
        //2) Coloca na div os valores
        let divRelatorio=  document.getElementById("relatorio");
        divRelatorio.innerText="Mais Novo:" + this.maior +  " Mais Velho:" + this.menor 
        divRelatorio.classList.add("visivel")
        
    }

    excluir(i){
            //excluir do Array
            this.anos.splice(i,  1);
            //excluir da tela
            //???

                //1) Excluir elemento pelo ID

                //2)
            //atualizar as propriedades maior=0, menor=3000, qtd--
            this.menor= 3000;
            this.maior=0;
            this.qtd --;
    }
}

var car =  new Carro();