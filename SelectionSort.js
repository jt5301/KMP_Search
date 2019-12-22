function selectionSort(array){
  for(let i = 0; i<array.length-1;i++){
    let min = array[i]
    let minPos = i
    for(let k = i+1; k<array.length;k++){
       if(array[k]<min){
         min = array[k]
         minPos = k
       }
    }
    if(min != array[i]){
      let temp = array[i]
      array[i]=min
      array[minPos] = temp
    }
  }
    return array
}
