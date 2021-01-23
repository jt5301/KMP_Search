var findJudge = function(N, trust) {
  if(N===1)return 1
  let pplGraph = {}
  let potentials = []
  for(let i = 0;i<trust.length;i++){
      if(!pplGraph[trust[i][0]])pplGraph[trust[i][0]] = []
      pplGraph[trust[i][0]].push(trust[i][1])
      if(!pplGraph[trust[i][1]])pplGraph[trust[i][1]]=[]
  }
  for(let potential in pplGraph){
      if(pplGraph[potential].length===0){
          potentials.push(potential)
      }
  }
  let judge = 0
  while(judge < potentials.length){
      let isJudge = true
      for(let ppl in pplGraph){
          if(ppl===potentials[judge])continue
          if(!pplGraph[ppl].includes(parseInt(potentials[judge]))){
              isJudge = false
              break
          }
      }
      if(isJudge)return parseInt(potentials[judge])
      judge+=1
  }
  return -1
};
