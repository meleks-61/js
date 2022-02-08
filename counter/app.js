let valueElement=document.getElementById("value")
// let dcButElement=document.querySelector(".decrease")
// let rtButElement=document.querySelector(".reset")
// let icButElement=document.querySelector(".increase")

// dcButElement.addEventListener("click",()=>{
//     valueElement.innerText=parseFloat(valueElement.innerText)-1

// })
// rtButElement.addEventListener("click",()=>{
//     valueElement.innerText=0
// })
// icButElement.addEventListener("click",()=>{
//     valueElement.innerText=parseFloat(valueElement.innerText)+1
// })
// console.log(parseFloat(valueElement.innerText)+2)

/////////////
// let count=0
// let btnsElement=document.querySelectorAll(".btn")//bir nodelist döner
// btnsElement.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         console.log(btn.innerText) 
//         if(btn.innerText==="DECREASE"){
//             count--
//             console.log(count)
//         }
//         if(btn.innerText==="RESET"){
//             count=0
//             console.log(count)
//         }
//         if(btn.innerText==="INCREASE"){
//             count++
//             console.log(count)
//         }
//         valueElement.innerText=count

//     })
//      })

/////

let count=0
let btnsElement=document.querySelectorAll(".btn")
btnsElement.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.currentTarget.classList)//e-->bir olay nesnesi,e.target=e.currentTarget-->olayı tetikleyen öğe,e.currentTarget.classList(olayı tetikleyen öğenin classlarını liste içinde döndürür)
        const styles=e.currentTarget.classList
        if(styles.contains("decrease")){
            count--

        }
        if(styles.contains("reset")){
            count=0

        }
        if(styles.contains("increase")){
            count++

        }
        valueElement.innerText=count

    })

})


