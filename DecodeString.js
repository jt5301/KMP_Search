/*
Setup:
a word has a char code 'A - Z' 65 - 92
                        'a - z' 97 - 123
                        ' ' 32
given the string 'Find the truth ' in char code is
'23401611711411611231014016112300101150107'
*/

function decode(string){
  let dict = {}
  dict[32] = ' '
  for(let i = 65;i<=90;i++){
    let letter = String.fromCharCode(i)
    dict[i] = letter
  }
  for(let i = 97;i<123;i++){
    let letter = String.fromCharCode(i)
    dict[i] = letter
  }
  let index = string.length
  let returnString = ''
  while(string[index-1]){
    let two = string.slice(index-2,index).split('').reverse().join('')
    if(dict[two]){
      returnString+=dict[two]
      index-=2
    }
    else {
      returnString+=dict[string.slice(index-3,index).split('').reverse().join('')]
      index-=3
    }
  }
  return returnString
}
