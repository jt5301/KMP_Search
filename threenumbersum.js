// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

function threeNumberSum(array, targetSum) {
	let sumArrays = []
  let sortedArray = selectionSort(array)//any sort here is fine
	for(let i = 0;i<array.length;i++){
		let firstNum = array[i]
		let secondInd = i+1
		let thirdInd = array.length-1
		while(thirdInd>secondInd){
			if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]===targetSum){
				let correctArray = [firstNum,sortedArray[secondInd],sortedArray[thirdInd]]
				sumArrays.push(correctArray)
				secondInd+=1
				thirdInd-=1
			}
			if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]<targetSum){
				secondInd+=1
			}
			if(firstNum+sortedArray[secondInd]+sortedArray[thirdInd]>targetSum){
				thirdInd-=1
			}
		}
	}
	return sumArrays
}

//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
var threeSum = function (nums) {
  let sumArrays = [];
  let sortedArray = bubbleSort(nums);//any sort here is fine
  for (let i = 0; i < sortedArray.length - 2; i++) {
    let firstNum = sortedArray[i];
    let secondInd = i + 1;
    let thirdInd = sortedArray.length - 1;
    while (thirdInd > secondInd) {
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] === 0) {
        let correctArray = [
          firstNum,
          sortedArray[secondInd],
          sortedArray[thirdInd],
        ];
        sumArrays.push(correctArray);
        secondInd += 1;
        thirdInd -= 1;
      }
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] < 0) {
        secondInd += 1;
      }
      if (firstNum + sortedArray[secondInd] + sortedArray[thirdInd] > 0) {
        thirdInd -= 1;
      }
    }
  }
  return sumArrays;
};
