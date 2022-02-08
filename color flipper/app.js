let color=document.querySelector(".color")
let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=`rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
    color.textContent=document.body.style.backgroundColor;
})
getRandomNumber =()=>Math.round(Math.random()*255)
