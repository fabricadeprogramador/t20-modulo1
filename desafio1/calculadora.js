class Calculadora{

    somar(){
        //1) Ler dados convertidos em numeros dos inputs 
        var n1 =  parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        
        //2) Realizar a soma
        var r = n1 + n2;

        //3) Exibir o resultado
        document.getElementById("resultadoSoma").innerText=r;
    }

     subtrair(){
        //1) Ler dados convertidos em numeros dos inputs 
        var n1 =  parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        
        //2) Realizar a sub
        var r = n1 - n2;

        //3) Exibir o resultado
        alert(r);
    }

    dividir(){
        //1) Ler dados convertidos em numeros dos inputs 
        var n1 =  parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        
        //2) Realizar a div
        var r = n1 / n2;

        //3) Exibir o resultado
        alert(r);

    }

    multiplicar(){
        //1) Ler dados convertidos em numeros dos inputs 
        var n1 =  parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        
        //2) Realizar a mult
        var r = n1 * n2;

        //3) Exibir o resultado
        document.getElementById("resultadoMult").innerText=r;

    }
     porcentagem(){
        //1) Ler dados convertidos em numeros dos inputs 
        var n1 =  parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        
        //2) Realizar a mult
        var r = n1 * n2/100;

        //3) Exibir o resultado
        alert(n2+ "%  de " + n1 +" é " + r);

    }

}

//Instanciar Objeto
var calculadora =  new Calculadora();