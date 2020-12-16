//partially solved using a dictionary, but doesn't account for order
function interweavingStrings(one, two, three) {
  let dictionary = {}
    let oneCounter = 0
    let twoCounter = 0
    if(three.length != one.length+two.length)return false
    while(oneCounter < one.length || twoCounter <two.length){
        if(!dictionary[one[oneCounter]]&&one[oneCounter]) {
            dictionary[one[oneCounter]] = 1
            oneCounter+=1
        }
        else{
            dictionary[one[oneCounter]]+=1
            oneCounter+=1
        }

        if(!dictionary[two[twoCounter]]&&two[twoCounter]){
            dictionary[two[twoCounter]] = 1
            twoCounter +=1
        }
        else{
            dictionary[two[twoCounter]]+=1
            twoCounter+=1
        }

    }
    for(let i = 0;i<three.length;i++){
        if(dictionary[three[i]] === 0)return false
        if(!dictionary[three[i]])return false
        else{
            dictionary[three[i]]-=1
        }
    }
		// for(let key in dictionary){
		// if(dictionary[key] !=0)return false
		// }

    return true
}


