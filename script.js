const body=document.querySelector("body")
const displayBox=document.querySelector(".display-box")
const keyboard=document.querySelector(".display-box p")
body.addEventListener("keydown",function(e){
    const keys=e.key
    if(keys===" "){
        keyboard.innerHTML="Space"
    }else{
        keyboard.innerHTML=`${keys}`
    }
    console.log(keys)
})