//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSum = function(nums) {
  let sumArrays = []
    let sortedArray = bubbleSort(nums)
    for(let i = 0;i<sortedArray.length-2;i++){
      let firstNum = sortedArray[i]
      let secondInd = i+1
      let thirdInd = sortedArray.length-1
      while(thirdInd>secondInd){
        if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]===0){
          let correctArray = [firstNum,sortedArray[secondInd],sortedArray[thirdInd]]
          sumArrays.push(correctArray)
          secondInd+=1
          thirdInd-=1
        }
        if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]<0){
          secondInd+=1
        }
        if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]>0){
          thirdInd-=1
        }
      }
    }
    return sumArrays
  };
  function bubbleSort(nums){
      for(let i = nums.length-1;i>0;i--){
          let swapped = true
          for(let k = 0;k<i;k++){
              if(nums[k]>nums[k+1]){
                  let temp = nums[k]
                  nums[k]= nums[k+1]
                  nums[k+1] = temp
                  swapped = false
              }
          }
      }
      return nums
  }
