let birthElement=document.querySelector('[name=birthday]')
let ageElemet=document.querySelector("#age")

birthElement.addEventListener("change",()=>{
    let age=new Date().getFullYear()- new Date(birthElement.value).getFullYear()
    alert("your age: " + " "+age ) 
    ageElemet.innerText=`Your age : ${age}`
    console.log(age)
    

})