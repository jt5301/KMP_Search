function getDigit(num, index){
  return Math.floor(Math.abs(num) / Math.pow(10,index)) % 10
}
//returns digit in number @ given place value. e.g: 12345, 0 returns 5. 12345, 3 returns 2. starts @ 0th index.

function digitCount(num){
 if(num===0)return 1
 return Math.floor(Math.log10(Math.abs(num)))+1
} //returns the number of digits in a number. Ex: 12 returns 2 digits. 123 returns 3 digits

function mostDigits(nums){
 let maxDigits = 0
 for(let i = 0;i<nums.length;i++){
   maxDigits = Math.max(maxDigits,digitCount(nums[i]))
 }
 return maxDigits
}
//returns the larges number of digits in an array of numbers. [123,1234,12345] returns 5

function radixSort(nums){
 let maxDigitCount = mostDigits(nums)//max num of digits to loop through

 for(let i = 0;i<maxDigitCount;i++){
   let digitBuckets = Array.from({length:10}, ()=>[])//creates 10 empty sub arrays in an array called digitBuckets
   for(let k = 0;k<nums.length;k++){
     let digit = getDigit(nums[k], i)//gets the digit from each number depending on which loop / space i is in.
     digitBuckets[digit].push(nums[k]) //place that number in the respective bucket
   }
   nums = [].concat(...digitBuckets)//creates an empty array, combining all the digitBuckets arrays using a spread operator
 }
 return nums
}

radixSort([123,12,1,9852,121])
