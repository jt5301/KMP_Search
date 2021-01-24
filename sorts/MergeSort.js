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
//second implementation
function mergeSort(array){
  if(array.length===1)return array
  let array1 = array.slice(0,array.length/2)
  let array2 = array.slice(array.length/2)
  return mergeSortHelper(mergeSort(array1),mergeSort(array2))
}
function mergeSortHelper(array1,array2){
  let sorted = []
  let arr1Point = 0
  let arr2Point = 0
  while(arr1Point < array1.length && arr2Point < array2.length){
    if(array1[arr1Point] <= array2[arr2Point]){
      sorted.push(array1[arr1Point])
      arr1Point+=1
    }
    else{
      sorted.push(array2[arr2Point])
      arr2Point+=1
    }
  }
  if(arr1Point < array1.length){
    for(let i = arr1Point;i<array1.length;i++){
      sorted.push(array1[arr1Point])
    }
  }
  if(arr2Point < array2.length){
    for(let i = arr2Point;i<array2.length;i++){
      sorted.push(array2[arr2Point])
    }
  }
  return sorted
}

function mergeSort(array){
  if(array.length===1)return array
  let array1 = array.slice(0,array.length/2)
  let array2 = array.slice(array.length/2)
  return mergeSortHelper(mergeSort(array1),mergeSort(array2))
}

function mergeSortHelper(array1,array2){
  let arr1Count = 0
  let arr2Count = 0
  let sorted = []
  while(arr1Count < array1.length && arr2Count < array2.length){
    if(array1[arr1Count] < array2[arr2Count]){
      sorted.push(array1[arr1Count])
      arr1Count+=1
    }
    else{
      sorted.push(array2[arr2Count])
      arr2Count+=1
    }
  }
  if(arr1Count < array1.length){
    for(let i = arr1Count;i<array1.length;i++){
      sorted.push(array1[i])
    }
  }
  else{
    for(let i = arr2Count;i < array2.length;i++){
      sorted.push(array2[i])
    }
  }
  return sorted
}

console.log(mergeSort([1,5,7,2,56,3,8,2,2,4,4]))
