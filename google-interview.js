const maxArray = () =>{
    let nums =[1,3,-1,-3,5,3,6,7]
    
        const deger = nums.length
        
        

    

const k=3
let max;
let output = [];

for (let i = 0; i <=deger ; i++) {
    let numsNew =[];

    if (nums.length   >= k) {
        for (let j = 0; j < k; j++) {
            numsNew.push(nums[j])
            max = numsNew[0];
            numsNew.forEach(e => {max <e ? max=e :null})  

        }
        console.log(numsNew);
        // console.log(max);
        output.push(max);
        // console.log(output);
        // console.log(nums);
        
    }
    nums.splice(0,1);
    
    console.log(nums);
    

    
}
console.log(output);
}
maxArray();