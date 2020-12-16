//balanced brackets solution

var isValid = function (s) {
  let openingBrackets = '({[';
  let bracketLookup = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (s[i] === bracketLookup[stack[stack.length - 1]]) {
        stack.pop();
      } else return false;
    }
  }
  if (stack.length === 0) return true;
  else {
    return false;
  }
};
