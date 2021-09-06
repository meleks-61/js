// function showTime(){

// const timeLabel = document.querySelector("h1");
//     const time = new Date();
//     timeLabel.innerHTML = time.toLocaleTimeString();
// }
//  setInterval(showTime,1000);  //burada seTInterval işlevine uygun olarak(belirtilen aralıklarla belirtilen fonksiyonun sürekli çalışmasını sağlar), showTime fonksiyonunu 1sn aralıklarla çalıştırmamızı sağladı.

//-------------------------showTime fonksiyonunu 5 sn sonra durdurmak için
//1
// function showTime() {
//   const timeLabel = document.querySelector("h1");
//   const time = new Date();
//   timeLabel.innerHTML = time.toLocaleTimeString();
// }
// const id = setInterval(showTime, 1000); //burada setInterval işlevine uygun olarak, showTime fonksiyonunu 1sn aralıklarla çalıştırmamızı sağladı.
// setTimeout(() => clearInterval(id), 5000); // aslında setTimeout içerisindeki fonksiyonu belirtilen zaman sonunda çalıştırma işlevine sahiptir.Burada da 5 sn sonra clearInterval fonk. çalıştırmış ve showTime fonksiyonu, 5000(5sn) olarak  belirtilen süre sonunda durmuştur.(clearIntervalin işlevi durdurmak old)


//2
// 
// let counter = 0;
// function showTime(){
    
//     if (counter===5){
//         clearInterval(id);//ClearInterval()sayesinde  5 sn sonra showTime fonksiyonunun çalışması durduruldu.

//     }
//     const timeLabel = document.querySelector("h1")
//     const time = new Date();
//     timeLabel.innerHTML =time.toLocaleTimeString();
//     counter++

// }
// const id = setInterval(showTime,1000)

//3
// let counter = 0;
//  const id = setInterval(function showTime(){
//     const timeLabel = document.querySelector("h1");
//     const time = new Date();
//     timeLabel.innerHTML =time.toLocaleTimeString();
//     counter++
    
//     if (counter===5){
//         clearInterval(id);
//         timeLabel.innerHTML ="stop"//ClearInterval()sayesinde  5 sn sonra showTime fonksiyonunun çalışması durduruldu.

//     }
   
  

// },1000)

//Örnek birkaç fonksiyon yazalım:

// function countSeconds(limit){
//     let current = 0;
//     const intId = setInterval(() => {
//         if (current===limit) {
//             clearInterval(intId)
//             console.log("counter finished");
//             return//else yazmadığımız için
            
//         }
//         current++
//         const timeLabel = document.querySelector("h1");
//         const time = new Date();
//         timeLabel.innerHTML =time.toLocaleTimeString();
//         console.log(`${current} seconds passed`);
        
//     }, 1000);
// }

// countSeconds(4)// 4 saniye boyunca contSeconds fonksiyonu çalıştı ve durdu.(digital saat 4sn boyunca çalıştı)


//-------------------------Aynı şeyi recursive(fonksiyonun girilen parametre değeri kadar kendini tekrar etmesi) ile yapalım
//1
// let current = 0;
// function countSeconds(limit){
//     if (current>limit) {
//         console.log("counter finished");
        
//     }else{
//         if (current!==0) {
//             console.log(`${current} secons passed`);
            
//         }
//         current++
//         setTimeout(countSeconds,1000,limit);

//     }
    

// }
// countSeconds(3);


//ya da

// function countSeconds2(limit){
//     let seconds = setTimeout(countSeconds2,1000,limit)
//     console.log(seconds + `seconds passed`);
//     if (seconds === limit) {
//         clearTimeout(seconds)
//         console.log("time up");
        
        
//     }

// }
// countSeconds2(5);







