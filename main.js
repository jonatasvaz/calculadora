
function insert(num){
    console.log(num)
   let numero  = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML= numero+  num
}
function clean(){
    let clear =  document.querySelector('#resultado')
    clear.innerHTML=""
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function nathing(){
    document.getElementById('resultado').innerHTML="error"
}

function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else
            {
                nathing()
               setTimeout(() => {
                document.getElementById('resultado').innerHTML=""
               }, 2000);
             
            }
        }
