const display = document.getElementById('display')
let resultadoexibido = false;

function AppendToDisplay(input){
    if(resultadoexibido){

        if(!isNaN(input)){
            display.value = input;
        }else{
            display.value += input; 
        }
        resultadoexibido = false;
        return;
    }

   display.value += input; 
}

function Calcular(){
    try{
    display.value = eval(display.value);  /*Ele interpreta a string como código */
    resultadoexibido = true;
    } 
    catch(error){
        display.value = "Erro";
        resultadoexibido = true;
    }
}

function Limpar(){ 
    display.value = "";
    resultadoexibido = false;
}


/*o input dentro dos () vai receber o valor lá do onclick no arquivo HTML, pois depende de informação externa. display.value vai acrescentar o valor de input, o display é a janela lá do html que criamos para aparecer os números. graças ao += ele vai acrescentar o o valor que a gente clicar na pagina HTML, deixando apenas = ele vai substituir. */






















