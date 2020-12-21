// 1029. Two City Scheduling

// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

var twoCitySchedCost = function (costs) {
  costs.sort((person1, person2) => {
    return Math.abs(person2[0] - person2[1]) - Math.abs(person1[0] - person1[1])
  })
  let cityA = 0
  let cityAPeople = 0
  let cityB = 0
  let cityBPeople = 0
  for (let person of costs) {
    if (cityBPeople === costs.length / 2) {
      cityA += person[0]
      continue
    }
    if (cityAPeople === costs.length / 2) {
      cityB += person[1]
      continue
    }
    if (person[0] < person[1]) {
      cityA += person[0]
      cityAPeople += 1
    }
    else {
      cityB += person[1]
      cityBPeople += 1
    }
  }
  return cityA + cityB
};

var twoCitySchedCost = function(costs) {
  costs = costs.sort((a,b)=>{
      let aDiff = Math.abs(a[0]-a[1])
      let bDiff = Math.abs(b[0]-b[1])
      return bDiff-aDiff
  })
  let cityA = 0
  let cityACount = 0
  let cityB = 0
  let cityBCount = 0
  let count = 0
  while(cityACount < (costs.length/2) && cityBCount < (costs.length/2) ){
      if(costs[count][0] <=costs[count][1]){
          cityACount+=1
          cityA+=costs[count][0]
      }
      else{
          cityBCount+=1
          cityB+=costs[count][1]
      }
      count+=1
  }
  for(let i = count;i<costs.length;i++){
      if(cityACount <cityBCount){
          cityA+=costs[i][0]
      }
      else cityB+=costs[i][1]
  }
  return cityA+cityB
};
