// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

var checkValidString = function (s) {
  let lStack = []
  let starStack = []
  let index = 0
  while (index < s.length) {
    switch (s[index]) {
      case '(':
        lStack.push(index)
        break
      case '*':
        starStack.push(index)
        break
      case ')':
        if (lStack.length != 0) lStack.pop()
        else {
          if (starStack.length != 0) starStack.pop()
          else return false
        }
    }
    index += 1
  }
  let balanced = true
  lStack.forEach((current) => {
    let match = starStack.find((element) => element > current)
    if (match) starStack.splice(starStack.indexOf(match), 1)
    else balanced = false
  }) //goes through remaining to match left parens to stars
  return balanced
};
