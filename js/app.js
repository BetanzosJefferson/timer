"use strict"
var minutosForm = document.getElementById("formMin")
var segundosForm = document.getElementById("formSeg")
const minOutput = document.getElementById("min")
const segOutPut = document.getElementById("seg")
const minutesMinus = document.querySelector(".minutes-decrement")
const minutesPlus = document.querySelector(".minutes-increment")
const secondsMinus = document.querySelector(".seconds-decrement")
const secondsPlus = document.querySelector(".seconds-icrement")
const button = document.getElementById("go")


//MODAL
const modal = document.querySelector(".modal")
const modalMessage = document.querySelector(".modal__message")





//Listeners
minutesMinus.addEventListener("click",(e)=>{
    e.preventDefault()
    if(minutosForm.value == 0){
        minutosForm.value = '0'
    }else{
        minutosForm.value--;
    }
})

minutesPlus.addEventListener("click", (e)=>{
    e.preventDefault()
    if(minutosForm.value == 59){
       minutosForm.value = 59
    }else{
        minutosForm.value++
    }
})

secondsMinus.addEventListener("click" , (e)=>{
    e.preventDefault()
    if(segundosForm.value == 0){
        segundosForm.value = 0
    }else{
        segundosForm.value--
    }
})
secondsPlus.addEventListener("click", (e)=>{
    e.preventDefault()
    if(segundosForm.value == 59){
        segundosForm.value = 59
    }else{
        segundosForm.value++
    }
})

//Parsear valores
button.addEventListener("click", (e) => {
    e.preventDefault()
    temporizador(parseInt(minutosForm.value), parseInt(segundosForm.value))
})


function temporizador(minutos, segundos) {
    let tiempo = 0;
    let i = 0;
    let timecount = 0;

    if (!minutos) { //EN CASO DE QUE NO HAYA MINUTOS
        if (segundos < 0 || segundos > 59) {
            minutosForm.value = 0
            segundosForm.value = 0
        } else {
            tiempo = segundos;
            timecount = tiempo;
            button.disabled = true;    
            var escribir = function () {
                if (i < tiempo) {
                    i++
                    console.log(timecount)
                    timecount--
                    minOutput.textContent = "00"
                    if (timecount < 10) {
                        segOutPut.textContent = "0" + timecount
                    } else {
                        segOutPut.textContent = timecount
                    }
                } else {
                    button.disabled = false;
                    clearInterval()
                }
            }
            setInterval(escribir, 1000)
        }


    } 
    else if (!segundos) { //EN CASO DE QUE SOLO HAYA MINUTOS
        tiempo = minutos * 60
        segundos = 60;
        minutos--
        button.disabled = true;
        var escribir = function(){
            if (i == tiempo) {
                console.log("Tiempo finalizado");
                clearInterval(timer);
                button.disabled = false;
              } else {
                segundos--;
                if(segundos < 10){
                    segOutPut.textContent = "0" + segundos
                }else{
                    segOutPut.textContent = segundos
                }
                if(minutos < 10){
                minOutput.textContent = "0" +  minutos
                }else{
                    minOutput.textContent =  minutos
                }
                if (segundos == 0) {
                    minutos--;
                    segundos = 60; 
                }
                i++;
              }
        }
        var timer = setInterval(escribir, 1000)

    } else { //EN CASO DE QUE HAY SEGUNDOS Y MINUTOS
        tiempo = minutos * 60 + segundos
        if ( segundos == 0){
            minutos--
        }
        button.disabled = true;
        var escribir = function(){
            if (i == tiempo) {
                console.log("Tiempo finalizado");
                clearInterval(timer);
                button.disabled = false;
              } else {
                segundos--;
                if(segundos < 10){
                    segOutPut.textContent = "0" + segundos
                }else{
                    segOutPut.textContent = segundos
                }
                if(minutos < 10){
                minOutput.textContent = "0" +  minutos
                }else{
                    minOutput.textContent =  minutos
                }
              
                if (segundos == 0) {
                    minutos--;
                    segundos = 60; 
                }
                i++;
              }
        }
        var timer = setInterval(escribir, 1000)
       
    }
}


console.log("Code by William J.")