// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

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

var groupAnagrams = function (strs) {
  let outputArray = []
  let sortedArray = []

  strs.forEach((current) => {
    sortedArray.push(current.split('').sort().join(''))
  })


  while (strs.length != 0) {
    let group = []
    let target = sortedArray[0]
    for (let i = 0; i < strs.length; i++) {
      let compare = sortedArray[i]
      if (compare === target) {
        group.push(strs[i])
        strs.splice(i, 1)
        sortedArray.splice(i, 1)
        i -= 1
      }
    }
    outputArray.push(group)
  }
  return outputArray
};
