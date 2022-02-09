let tglElement=document.querySelector(".nav-toggle")
let linksElement=document.querySelector(".links")


// let count=0

// tglElement.addEventListener("click",()=>{
//     count++
//     if(count%2!=0){
//         linksElement.setAttribute("class"," links show-links")
        
//     }
//     else{
//         linksElement.setAttribute("class"," links")
//     }

// })

tglElement.onclick=()=>{
    // if(linksElement.classList.contains("show-links")){
    //     linksElement.classList.remove("show-links")

    // }
    // else{
    //     linksElement.classList.add("show-links")

    // }
    linksElement.classList.toggle("show-links")//yukarıdaki if else blogu ile aynı işlevi yapar
}