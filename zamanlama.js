// function showTime(){

// const timeLabel = document.querySelector("h1");
//     const time = new Date();
//     timeLabel.innerHTML = time.toLocaleTimeString();
// }
//  setInterval(showTime,1000);  //burada seTInterval işlevine uygun olarak, showTime fonksiyonunu 1sn aralıklarla çalıştırmamızı sağladı.

//showTime fonksiyonunu 5 sn sonra durdurmak için
//1
// function showTime() {
//   const timeLabel = document.querySelector("h1");
//   const time = new Date();
//   timeLabel.innerHTML = time.toLocaleTimeString();
// }
// const id = setInterval(showTime, 1000); //burada setInterval işlevine uygun olarak, showTime fonksiyonunu 1sn aralıklarla çalıştırmamızı sağladı.
// setTimeout(() => clearInterval(id), 5000); // aslında setTimeout içerisindeki fonksiyonu belirtilen zaman sonunda çalıştırma işlecine sahiptir.Burada da 5 sn sonra clearInterval fonk. çalıştırmış ve showTime fonksiyonunu, 5000(5sn) olarak  belirtilen  sonunda durmuştur.(clearIntervalin işlevi durdurmak old)


//2
// 
// let counter = 0;
// function showTime(){
    
//     if (counter===5){
//         clearInterval(id);//ClearInterval()sayesinde  20 sn sonra showTime fonksiyonunun çalışması durduruldu.

//     }
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
//         timeLabel.innerHTML ="stop"//ClearInterval()sayesinde  25 sn sonra showTime fonksiyonunun çalışması durduruldu.

//     }
   
  

// },1000)






