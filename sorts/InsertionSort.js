function insertionSort(array){
  let sorted = [array[0]]
  for(let i = 1;i<array.length;i++){
    if(array[i]<sorted[sorted.length-1]){
      for(let k = 0; k<sorted.length;k++){
        if(array[i]<sorted[k]){
          sorted.splice(k,0,array[i])
          break
        }
      }
    }
  }
  return sorted
}
console.log(insertionSort([5,3,4,1,2]))

//solution w/o new array. Same time complexity, smaller space complexity:

function insertionSort(array){
  for(let i = 1;i<array.length;i++){
    let currentVal = array[i]
    let replaceInd = 0
    if(array[i]<array[i-1]){
      for(let k = i-1;k>=0 && array[k] > currentVal;k--){
        array[k+1]=array[k]
        replaceInd = k
      }
      array[replaceInd] = currentVal
    }

  }
  return array
}
