// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

    // 0 -> 1
    // |    |
    // v    v
    // 2 -> 3

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

var allPathsSourceTarget = function(graph) {
  let destination = graph.length-1
  let graphHash = {}
  for(let i = 0;i<graph.length;i++){
      graphHash[i] = graph[i]
  }
  let paths = []
  function dfsTraverse(hash,path){
      let currentNode = path[path.length-1]
      if(currentNode===destination){
          paths.push(path.slice())
          return path
      }
      for(let i = 0;i<hash[currentNode].length;i++){
          path.push(hash[currentNode][i])
          dfsTraverse(hash,path)
          path.pop()
      }
  }
  dfsTraverse(graphHash,[0])
  return paths
};
