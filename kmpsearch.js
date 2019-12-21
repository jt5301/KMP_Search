function kpmSearch(string, pattern){
  let lpsArray = [0]
  let prefixInd = 0
  let suffixInd = 1
  while(suffixInd < pattern.length){
    if(pattern[prefixInd]===pattern[suffixInd]){
      lpsArray.push(prefixInd+1)
      prefixInd+=1
      suffixInd+=1
    }
    else{
      if(prefixInd===0){
        lpsArray.push(prefixInd)
        suffixInd+=1
      }
      else{
        prefixInd = lpsArray[prefixInd-1]
      }
    }
  }
  console.log(lpsArray)
  let stringInd = 0
  let patternInd = 0
  while(stringInd<string.length){
    if(string[stringInd]===pattern[patternInd]){
      if(patternInd === pattern.length-1){
        return stringInd-pattern.length+1
    }
    stringInd+=1
    patternInd+=1
  }
    else{
      if (patternInd > 0) {
      patternInd = lpsArray[patternInd - 1];
    }
      else{
        stringInd +=1
        patternInd = 0
      }
    }
  }
  return -1
}

