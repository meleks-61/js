let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color=document.querySelector(".color")
let btn=document.querySelector("#btn")
btn.addEventListener("click",()=>{
    code='#'
    for (let i = 0; i <6; i++) {
        code += hex[getRandomNumber()];
        
    }
    console.log(code)
    color.innerText=code
    document.body.style.backgroundColor=code
});
 getRandomNumber=()=>Math.floor(Math.random()*hex.length)