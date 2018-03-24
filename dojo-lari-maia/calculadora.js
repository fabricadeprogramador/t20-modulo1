class Calculadora{



    calcular(){

        //1) Ler os dados tela , QTDS e Bonus
       let porcentagemBonus= document.getElementById("porcentagemBonus").value;
       let qtdCelofane= document.getElementById("celofane").value;
       let qtdCrepom= document.getElementById("crepom").value;
       let qtdLacoChanel= document.getElementById("lacochanel").value;
       let qtdImportado= document.getElementById("importado").value;
       let qtdCaixa= document.getElementById("caixa").value;
    
       //2) Calculos os preços
        let precoCelofane = qtdCelofane * 2.50;
        let precoCrepom = qtdCrepom * 3.10;
        let precoLacoChanel = qtdLacoChanel * 3.70;
        let precoImportado = qtdImportado * 3.90;
        let precoCaixa = qtdCaixa * 4;

        //3) Calcular Bonus

        let calculoPorcentagem =  (porcentagemBonus/100);

        let bonusCelofane = qtdCelofane * calculoPorcentagem ;
        let bonusCrepom = qtdCrepom * calculoPorcentagem;
        let bonusLacoChanel = qtdLacoChanel * calculoPorcentagem;
        let bonusImportado = qtdImportado * calculoPorcentagem;
        let bonusCaixa = qtdCaixa * calculoPorcentagem;
        //4) Calcular as Somas (QTDs, Bonus, Preços)

            //4.1) Soma das Qtds
        let somaQuantidades = parseFloat(qtdCelofane)+ parseFloat(qtdCrepom) + parseFloat(qtdLacoChanel) + parseFloat(qtdImportado) + parseFloat(qtdCaixa);

            //4.2) Soma dos Bonus
        let somaBonus = parseFloat(bonusCelofane)+ parseFloat(bonusCrepom) + parseFloat(bonusLacoChanel) + parseFloat(bonusImportado) + parseFloat(bonusCaixa);
           
            //4.3)Somas dos Preços
        let somaPrecos = parseFloat(precoCelofane) + parseFloat(precoCrepom) + parseFloat(precoLacoChanel) + parseFloat(precoImportado) +  parseFloat(precoCaixa);
        
        //5) Soma da (Soma dos Bonus) com (Soma das QTD solicitas)

        let somaQtdTotal = somaQuantidades + somaBonus ;

        //6) Exibir na Tela

        //6.1) Exibir preços na tela
         document.getElementById("precoCelofane").innerText= precoCelofane;
         document.getElementById("precoCrepom").innerText= precoCrepom;
         document.getElementById("precoLacoChanel").innerText= precoLacoChanel;
         document.getElementById("precoImportado").innerText= precoImportado;
         document.getElementById("precoCaixa").innerText= precoCaixa;
  
        //6.2) Exibir Bonus
        document.getElementById("bonusCelofane").innerText= bonusCelofane;
        document.getElementById("bonusCrepom").innerText= bonusCrepom;
        document.getElementById("bonusLacoChanel").innerText= bonusLacoChanel;
        document.getElementById("bonusImportado").innerText= bonusImportado;
        document.getElementById("bonusCaixa").innerText= bonusCaixa;
 
        //6.3) Exibir Somas
        document.getElementById("somaQuantidades").innerText= somaQuantidades;
        document.getElementById("somaBonus").innerText= somaBonus;
        document.getElementById("somaPrecos").innerText= somaPrecos;



        }
}

//Instanciar Objeto
var calculadora =  new Calculadora();