//fonksiyonların diğer fonksiyonlarla paralel bir şekilde çalışmasına js de asynchronous denir
//  ** function myDisplayer(some){
//     document.getElementById("demo").innerHTML =some;

// }//this is my callback function


//    function myCalculator(num1,num2,myCallback){
//        let sum =num1+num2;
//        myCallback(sum);
//    }
//    myCalculator(5,5,myDisplayer)-->myDisplayer is used as a callback,myCalculater is passed as an argument


// // asynchronous funktion yazmanın 3 yolu var 



                               ////////////////1)   **setTımeout,setInterval**
//ex 
// setTimeout(myFunction,3000)

// function myFunction(){
//     document.getElementById("demo").innerHTML="I love you!!";
// }//3sn sonra I lOve you yazdırır.-->myFunction is used aa acallback, ıt is passed to setTimeout as an argument
// setTimeout(myFunction(),3000)-->false
// setTimeout(myFunction,3000)-->true

//ex
// setTimeout(function(){
//     myFunction("I love You!");
// },3000);
// function myFunction(value){
//     document.getElementById("demo").innerHTML=value;
// }
                                                   // **setInterval
    // setInterval(myFunction,1000);
    // function myFunction(){
    //     let d= new Date();
    //     document.getElementById("demo").innerHTML=
    //     d.getHours() + ":" +
    //     d.getMinutes()+ ":"+
    //     d.getSeconds();    
    // }-->1sn aralıklarla fonksiyon çalısır


                                            ///////////2)Promises
// let myPromise =new Promise(function(resolve,reject){
//     resolve()//when succesfuly
//     reject()//when error

// })
// myPromise.then(
//     function(value)//code if succesfuly
//     function(error)//code if some error
// )
                                  
//ex
// function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some;
// }
// let myPromise = new Promise(function(resolve,reject){
//     let x=0;
//     if(x===0){
//         resolve()
//     }else{
//         reject()
//     }

// }
// );
// myPromise.then(
//    function(){myDisplayer("yes")},//dogruysa ekrana yes yazar(xin değeri dogruysa)
//     function(){myDisplayer("dont do that")}//x in değeri doğru değilse "dont do that yazar"
// )

//***setTimeoutve promise kıyaslarsak:
//******************************** */

// setTimeout(function(){myFunction("I love you")},3000);
// function myFunction(value){
//     document.getElementById("demo").innerHTML=value;
// }
//************************************ */

// let myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){resolve("I love you")},3000);

// }
// )
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML=value;
// })
                                    ///// ////Async SYntax

//async and await make promises easier to write
// js yazılan birden çok foksiyonu aynı anda çalıştırmak isteyecektir.ASync-await ile istediğim sırada çalıştırabilirim bu fonksiyonları
//bunu callback ve promislerle de yapabiliriz fakat içiçe cok fazla fonsiyon ortaya çıkacak ve kodun okunurlugu azalacaktır.genel fonksiyonun basına async yazıyoruz, beklenmesini istediğimiz kısmın başına da await yazıyoruz.Böylece await yazdıgımız kısım çalışmadan aşağıdaki kodların çalışmasını engellemiş oluyoruz.

// async function f() {

//       let Mypromise =await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 3000)
//     });
//     // let result = await promise; // wait until the promise resolves (*)
//     console.log(Mypromise);// "done!"
//     console.log("abc");
//   }
//   f();



        