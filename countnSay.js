// 38. Count and Say

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

var countAndSay = function(n) {
  if(n===1)return '1'
  return countnSayHelper(countAndSay(n-1))
};

function countnSayHelper(n){
  let current = n[0]
  let returnCountnSay = ''
  let count = 1
  for(let i = 1;i<n.length;i++){
      if(n[i]!=current){
          returnCountnSay+=`${count}`+`${current}`
          current = n[i]
          count=1
      }
      else count+=1
  }
  return returnCountnSay+=`${count}`+`${current}`
}
