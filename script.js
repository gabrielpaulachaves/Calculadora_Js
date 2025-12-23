const display = document.getElementById('display')

function AppendToDisplay(input){
   display.value += input; 
}

function Calcular(){
    try{
    display.value = eval(display.value);
     /*eval() pega uma expressão tipo 1, 2,3 e avalia e da o resultado. Ele interpreta a string como código */ 
    } 
    catch(error){
        display.value = "Erro";
    }
}

function Limpar(){ 
    display.value = "";
}


/*o input dentro dos () vai receber o valor lá do onclick no arquivo HTML, pois depende de informação externa. display.value vai acrescentar o valor de input, o display é a janela lá do html que criamos para aparecer os números. graças ao += ele vai acrescentar o o valor que a gente clicar na pagina HTML, deixando apenas = ele vai substituir. */






















