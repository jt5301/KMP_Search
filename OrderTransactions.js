/*
Order Transactions:

sort a list of transactions by order of occurance first then sort by decendind order Alphabetically;

Example:
input: ['can','bar', 'bar', 'bar',];
output: ['bar 3', 'can 1'];

input: ['banana', 'apple', 'bar'];
output: ['apple 1', 'banana 1', 'bar 1'];

input: ['kkldp','kkldp', 'kkldp', 'zzxl', 'aabbs', 'bbuuy']

output: ['kkldp 3','aabbs 1', 'bbuuy 1', 'zzxl 1']
*/
function transactions(array){
  let occurance = {}

  for(let item of array){
    if(!occurance[item])occurance[item]=1
    else occurance[item] +=1
  }
  let returnArr = []
  for(let item in occurance){
    returnArr.push(`${item} ${occurance[item]}`)
  }
  returnArr.sort((a,b)=>{
    if(parseInt(b[b.length-1]) != parseInt(a[a.length-1])){
      return parseInt(b[b.length-1])-parseInt(a[a.length-1])
    }
    return a.split(' ')[0].localeCompare(b.split(' ')[0])
    })
  return returnArr
}
