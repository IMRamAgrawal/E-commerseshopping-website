
let icon = document.getElementsByClassName("icon")[0]
let right = document.getElementsByClassName("right")[0]
let x = document.getElementsByClassName("x")[0]
icon.addEventListener = ("click", rightdisplay())
function rightdisplay(){
    right.classList.add("display")
}
icon.onclick = function rightdisplay(){
     right.classList.add("display")
}
x.onclick = function rightdisplay(){
     right.classList.remove("display")
}