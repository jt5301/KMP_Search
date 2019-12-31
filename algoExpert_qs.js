/* Implement BubbleSort*/
function bubbleSort(array) {
	for(let i = array.length-1;i>0;i--){
		let swapCheck = true
		for(let k = 0;k<i;k++){
			if(array[k]>array[k+1]){
				swap(array, k, k+1)
				swapCheck = false
			}
		}
		if(swapCheck)return array
	}
	return array
}
function swap(array, ind1,ind2){
	let temp = array[ind1]
	array[ind1] = array[ind2]
	array[ind2] = temp
}

//Implement insertion Sort
function insertionSort(array) {
  for(let i = 0;i<array.length;i++){
      if(array[i+1]<array[i]){
          for(let k = i;k>=0;k--){
              if(array[k]>array[k+1])
                  swap(array,k,k+1)
          }
      }
  }
  return array
}
function swap(array, ind1,ind2){
  let temp = array[ind1]
  array[ind1] = array[ind2]
  array[ind2] = temp
}

//Implement selectionSort
function selectionSort(array) {
  for(let i = 0;i<array.length;i++){
		let smallest = array[i]
		let smallestPos = i
		for(let k = i+1;k<array.length;k++){
			if(array[k]<smallest){
				smallest= array[k]
				smallestPos = k
			}
		}
		if(smallestPos != i){
		swap(array, i, smallestPos)
		}
	}
	return array
}

function swap(array, ind1,ind2){
  let temp = array[ind1]
  array[ind1] = array[ind2]
  array[ind2] = temp
}

//threenumbersum on an unsorted Array
function threeNumberSum(array, targetSum) {
	let sumArrays = []
  let sortedArray = selectionSort(array)
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
function selectionSort(array) {
  for(let i = 0;i<array.length;i++){
		let smallest = array[i]
		let smallestPos = i
		for(let k = i+1;k<array.length;k++){
			if(array[k]<smallest){
				smallest= array[k]
				smallestPos = k
			}
		}
		if(smallestPos != i){
		swap(array, i, smallestPos)
		}
	}
	return array
}

function swap(array, ind1,ind2){
  let temp = array[ind1]
  array[ind1] = array[ind2]
  array[ind2] = temp
}

//medium group anagrams q

function groupAnagrams(words) {
  let anagramArray = []
    let wordsHash = {}
    for(let i = 0;i<words.length;i++){
        let currentWord = stringSort(words[i])
        if(!wordsHash[currentWord])wordsHash[currentWord]=[i]
        else wordsHash[currentWord].push(i)
    }
    for(let key in wordsHash){
        let anagramGroup = []
        let indices = wordsHash[key]
        for(let i = 0; i<indices.length;i++){
            anagramGroup.push(words[indices[i]])
        }
        anagramArray.push(anagramGroup)
    }
    return anagramArray
}

function stringSort (word){
    let array = word.split('')
    array.sort()
    return array.join('')
}

