function clearDisplay(){
    document.getElementById("display").value= "";
}
function appendToDisplay(value){

    document.getElementById("display").value += value;
}


function calculateResult(){
try{
     let result =eval(document.getElementById("display").value);
     document.getElementById("display").value = result;
}catch(e){
    document.getElementById("display").value = "ERROR";
}


}
 
function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function appendBrackets(){
    let display = document.getElementById("display").value;
    if(display.value===""){
        display.value = 4;
        console.log("clicke");
    }
}