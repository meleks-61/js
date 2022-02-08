let valueElement=document.getElementById("value")
let dcButElement=document.querySelector(".decrease")
let rtButElement=document.querySelector(".reset")
let icButElement=document.querySelector(".increase")

dcButElement.addEventListener("click",()=>{
    valueElement.innerText=parseFloat(valueElement.innerText)-1

})
rtButElement.addEventListener("click",()=>{
    valueElement.innerText=0
})
icButElement.addEventListener("click",()=>{
    valueElement.innerText=parseFloat(valueElement.innerText)+1
})
// console.log(parseFloat(valueElement.innerText)+2)