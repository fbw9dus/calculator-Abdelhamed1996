// addition Operation //

var additionResult = document.querySelector(".additionResult")
var additionInp1 = document.querySelector(".additionInp1")
var additionInp2 = document.querySelector(".additionInp2")

additionInp1.addEventListener("keyup",additionOperation)
additionInp2.addEventListener("keyup",additionOperation)

function additionOperation(){
    let additionNum1 = parseInt(additionInp1.value)
    let additionNum2 = parseInt(additionInp2.value)
    additionResult.value =  additionNum1 + additionNum2

}



//subtraction Operation //

var subtractionResult = document.querySelector(".subtractionResult")
var subtractionInp1 = document.querySelector(".subtractionInp1")
var subtractionInp2 = document.querySelector(".subtractionInp2")

subtractionInp1.addEventListener("keyup",subtractionOperation )
subtractionInp2.addEventListener("keyup",subtractionOperation )

function subtractionOperation(){
    let subtractionNum1 = parseInt(subtractionInp1.value)
    let subtractionNum2 = parseInt(subtractionInp2.value)
    subtractionResult.value = subtractionNum1 - subtractionNum2
}


// multipliction Operation//


var multiplictionResult = document.querySelector(".multiplictionResult")
var multiplictionInp1 = document.querySelector(".multiplictionInp1")
var multiplictionInp2 = document.querySelector(".multiplictionInp2")

multiplictionInp1.addEventListener("keyup", multiplictionOperation)
multiplictionInp2.addEventListener("keyup", multiplictionOperation)

function multiplictionOperation(){
    let multiplictionNum1 = parseInt(multiplictionInp1.value)
    let multiplictionNum2 = parseInt(multiplictionInp2.value)
    multiplictionResult.value = multiplictionNum1 * multiplictionNum2
}



// division Operation //

var divisionResult = document.querySelector(".divisionResult")
var divisionInp1 = document.querySelector(".divisionInp1")
var divisionInp2 = document.querySelector(".divisionInp2")

divisionInp1.addEventListener("keyup", divisionOperation)
divisionInp2.addEventListener("keyup", divisionOperation)

function divisionOperation(){
    let divisionNum1 = parseInt(divisionInp1.value)
    let divisionNum2 = parseInt(divisionInp2.value)
    divisionResult.value = divisionNum1 / divisionNum2
}


// modulo Operation //



var moduloResult = document.querySelector(".moduloResult")
var moduloInp1 = document.querySelector(".moduloInp1")
var moduloInp2 = document.querySelector(".moduloInp2")

moduloInp1.addEventListener("keyup", moduloOperation)
moduloInp2.addEventListener("keyup", moduloOperation)

function moduloOperation(){
    let moduloNum1 = parseInt(moduloInp1.value)
    let moduloNum2 = parseInt(moduloInp2.value)
    moduloResult.value = moduloNum1 % moduloNum2
}

