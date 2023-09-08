let displayElement = document.getElementById("displayOutput");
let displayValue = null;
function addingInput(num){
    
    displayElement.value += num;
    
}
function addingPlus(){
   
    displayElement.value += "+";
}
function addingMinus(){
    
    displayElement.value += "-";
}
function addingMultiply(){
    
    displayElement.value += "*";
}
function addingDivision(){
    
    displayElement.value += "/"
}
function addinghundreds(){
    displayElement.value += "00"
}
function addingDot(){
    
    displayElement.value += "."
}

function clearnum(){
   
    displayElement.value = null;
    
}
function deletenum(){
    displayValue = displayElement.value
    let expressionLength = displayValue.length;
    displayElement.value = displayValue.slice(0, expressionLength-1);
    
}
function calculation(){
        try{
             displayElement.value = eval(displayElement.value);
        }
        catch(error){
            displayElement.value = "Enter valid Expression"
        }
}