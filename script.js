const body = document.querySelector("body");
const displayBox = document.querySelector(".display-box");
const inputBox = document.querySelector("#input-box");
const keyboard = document.querySelector(".display-box p");

inputBox.value = "";


body.addEventListener("keydown", function(e) {
    const key = e.key === " " ? "Space" : e.key;
    keyboard.innerHTML = key === "Unidentified" || key === "" ? "Backspace" : key;
    console.log(key);
});
body.addEventListener("touchstart", function() {
    inputBox.focus();
})
inputBox.addEventListener("input", function() {
    const inputText = inputBox.value.trim()
    keyboard.innerHTML = inputText === "" ? "Space" : inputText
    inputBox.value = ""
})

function is_touch_enabled() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
}

if(is_touch_enabled){
    document.querySelector(".desktop-warning").style.display="none"
}else{
    document.querySelector(".mobile-warning").style.display="none"
}