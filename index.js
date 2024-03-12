const n1 = document.getElementById("numb1")
const ope = document.getElementById("operation")
const n2 = document.getElementById("numb2")
const resultado = document.getElementById("product")
const btn = document.getElementById("calcu")

btn.addEventListener ('click', operacion)

function operacion(){
    const operacion = ope.value
    const numero1 = parseFloat(n1.value) 
    const numero2 = parseFloat(n2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(numero1) && !isNaN(numero2)){
        let numeroF;
        switch(operacion){
            case "+":
                numeroF = numero1+numero2
                break
            case "-":
                numeroF = numero1-numero2
                break
            case "*":
                numeroF = numero1*numero2
                break
            case "/":
                numeroF = numero1/numero2
                break
        }
        resultado.value = "El resultado es: " + numeroF
    }else{
        resultado.value = "No se puede calcular"
    }
}