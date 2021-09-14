// const maxArray = () =>{
//     let nums =[1,3,-1,-3,5,3,6,7]

//         const deger = nums.length

// const k=3
// let max;
// let output = [];

// for (let i = 0; i <=deger ; i++) {
//     let numsNew =[];

//     if (nums.length   >= k) {
//         for (let j = 0; j < k; j++) {
//             numsNew.push(nums[j])
//             max = numsNew[0];
//             numsNew.forEach(e => {max <e ? max=e :null})

//         }
//         console.log(numsNew);
//         // console.log(max);
//         output.push(max);
//         // console.log(output);
//         // console.log(nums);

//     }
//     nums.splice(0,1);

//     console.log(nums);

// }
// console.log(output);
// }
// maxArray();







//2.çözüm//array.slice() methodu arrayin başlangıçtaki yapısını bozmaz
// const maxArray2=() => {
//   let nums2 = [1, 3, -1, -3, 5, 3, 6, 7];
//   const k2 = 3;
//   let output2 = [];
//   for (let i = 0; (j = k2); i <= nums2.length, j <= nums2.length, j++, i++) {

//     let newNums2 = nums2.slice(i,j)
    
    // let max=newNums.sort((a,b)=>b-a)[0]
    // output.push(max)
//   }
//   console.log(newNums2);
//   console.log(output2)
// }
// maxArray2();

