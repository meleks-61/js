
window.onload=()=>{
    setTimeout(FillFormInput,1000)
};
const FillFormInput=()=>{
    let email=document.getElementById("email").value="eve.holt@reqres.in"
    let password=document.getElementById("password").value= "pistol"
    localStorage.setItem("email",email)
}
//1XMLHTTPREQUEST(fetch ve axiosdan önce)
// const apiRegister=()=>{
//     let email=localStorage.getItem("email")
//     let password= document.getElementById("password").value
//     const bodyData={
//         email:email,
//         password:password

//     }//obje tanımlıyoruz,bu verileri apiye göndereceğiz
//     var xhr=new XMLHttpRequest();//APİ İLE köprü KURDUK
//     xhr.open("POST","https://reqres.in/api/register")//yolu açtık,verilen adrese veri gönderebilmek için
//     xhr.setRequestHeader("Content-Type", "application/json")//contentimizin type json olarak gönderilsin.
//     xhr.send(JSON.stringify(bodyData))//bodData verisini json olarak apiye gönder
//     xhr.onload =function(){
//         let data=JSON.parse(xhr.responseText)//bize gelecek veri text formstinds old i.in önce onu JSON.parse etmemiz gerek.json objeyi  js objeye dönüştürüyor.Bir array gibi kullanabilmek için.
//         if (data.id!="0") {
//             console.log(data)
//             localStorage.setItem("token",data.token)//artık istediğim heryerden bu token a ulaşıp apiye istek atabilirim.

//         }
//     }//biz apiye email ve password gönderiyoruz o da bize id gönderiyor
// }


    //2aynı işlemi fetch ile yapacağız.

    // const apiRegister= async ()=>{
    //     let email=document.getElementById("email").value
    //     let password=document.getElementById("password").value
    //     const bodyData={
    //         email:email,
    //         password:password,
    //     }
    //    await fetch("https://reqres.in/api/register",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(bodyData)//apinin istediği veri tipi

    //     })// elimizdeki verileri apiye gönderdik
    //     .then(response=>response.json())//şimdi apiden alacağımız veriyi jsona çeviriyoruz
    //     .then(data =>{
    //         if (data.id!="0") {
    //             console.log(data)
    //             alert("welcome "+ email.split("@")[0])
    //             sessionStorage.setItem("token",data.token)
                
    //         }
    //     }).catch((e)=>console.log(e))
    // }



    ///3Aynı işlemi es6 ile gelen axios işlemi ile yapacağiz.
    const apiRegister = async ()=>{
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value;
        //endpoint===url
        const data = await axios({
            url:"https://reqres.in/api/register",
            method:"post",
            data:{
                email:email,
                password:password

            }

        })//şuan axiosun içini dolduruyoruz,hangi veriler aracılığı ile istek atıcaz onu belirliyoruz//axios otomatik olarak json döndürdüğünden "headers" kısmına ihtiyacımız yok
        //biz istek attıktan sonra bize yukarıda tanımladıgımız data nın i.inde bir id ve token gönderiyor.(biz ona email ve password gönderiyoruz o bize aynı data içinde id ve token)
        if (data.data.id!="0") {
            console.log(data)
            console.log(data.data)
            window.location.href="userList.html";
            
        }
    }
