//array merge helper function

function mergeArray (array1,array2){
  let returnArray = []
  let ind1 = 0
  let ind2 = 0
  while(ind1 <array1.length && ind2 <array2.length){
    if(array1[ind1]<array2[ind2]){
      returnArray.push(array1[ind1])
      ind1+=1
    }
    else{
      returnArray.push(array2[ind2])
      ind2+=1
    }
  }
  if(ind1<array1.length){
    for(let i = ind1;i<array1.length;i++){
      returnArray.push(array1[ind1])
      ind1+=1
    }
  }
  if(ind2<array2.length){
    for(let i = ind2;i<array2.length;i++){
      returnArray.push(array2[ind2])
      ind2+=1
    }
  }
  return returnArray
}

//mergeSort
function mergeSort(array){
  if(array.length <=1) return array

    let firstHalf = mergeSort(array.slice(0,Math.floor(array.length/2)))

    let secondHalf = mergeSort(array.slice(Math.floor(array.length/2)))

    return mergeArray(firstHalf,secondHalf)


}


