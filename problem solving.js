// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// // 1
// // You deposited $xx
// // You withdrew $xxx

// //WİTH TERNERY

//  let arrDeposits = [];
//  let arrWithdraws = [];
//  movements.forEach(e => e>0 ? arrDeposits.push(e):arrWithdraws.push(-e));

//  console.log( arrDeposits);
//  console.log(arrWithdraws);

// //çekilen toplam para?
// let sum1=0
// arrDeposits.forEach(e => sum1+=e);
// console.log(`your total deposits is ${sum1}`);
// let sum2=0
// arrWithdraws.forEach(e => sum2+=e);
// console.log(`your total withdrews is ${sum2}`);

// //WİTH FOR LOOP

// let arrDeposits= 0;
// let arrWithdraws =0;
// for (let İ = 0; İ < movements.length; İ++) {
//     if (movements[i]>0) {
//         arrDeposits += movements[i];
//     }else{
//         movements[i] += movements[i];

//     }

// }

//2

//find each of words' first letter  and add all of them each other
const str = 'Clarusway Online Career IT Training School';
//i)
let arrWord = str.split(" ")
let newArr = []
arrWord.forEach(e => newArr.push(e[0]))
console.log(newArr.join(""));

//ii)

const newArr = str.split(" ").map(n => n[0]).join("")
console.log(newArr);

// /***** */
// 3

// const str = "The Quick Brown Fox"; // tHe YeLLoW fOx
// // // Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// //i)

// var newStr = str
//   .split("")
//   .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//   .join("");
//   console.log(newStr);

//ii)

// const arrOutput =[]
// // const nStr = str.split("")
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     // console.log(str[i]);
//     if (element === element.toUpperCase()) {
//         arrOutput.push(element.toLowerCase())
//         // console.log(arrOutput);
        
//     } else {
    
//         arrOutput.push(element.toUpperCase())
//     }
   
// }
// console.log(arrOutput.join(""));





//4
// // filter words longer than 6 letters
// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
//   'Clarusway',
//   'Future',
// ];

//i)
// let newWords =[]
// for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//     if (element.length>6) {
//         newWords.push(element)
        
//     }
    
// }
// console.log(newWords);


//ii)
// words.map( (e) => (e.length > 6 ? newWords.push(e) : newWords))
// console.log(newWords);


//3
// words.map( (e) => { if(e.length > 6){ newWords.push(e)}})
// console.log(newWords);