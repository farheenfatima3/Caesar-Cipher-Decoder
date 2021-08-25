const userInput=document.querySelector("#input")
const checkButton=document.querySelector("#chk-btn")
const outputText=document.querySelector("#out")
const numberUser=document.querySelector("#num")

checkButton.addEventListener("click", function(){
  
    let userIn=userInput.value
    userIn=userIn.toUpperCase()

    if(numberUser.value<0){
     
    showMessage("Please enter number greater than one.")
}else if(numberUser.value==0){
    showMessage("Please enter number of shifts to be performed on CipherText.")
}else{
    outputText.innerText=userIn.replace(/[A-Z]/g, newFun)
   
  
}})

function newFun(alphabet){
    
    let code=alphabet.charCodeAt()
    code=parseInt(code)+parseInt(numberUser.value)

   
    if(code>90){
        code=(code%90)+64
        return String.fromCharCode(code)
    }else{
        return String.fromCharCode(code)
    }
}


function showMessage(msg){
    outputText.style.display="block"
    outputText.innerText=msg
}



