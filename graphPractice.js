class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = []
  }
  addEdges(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdges(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((current)=>{
      if(current != vertex2)return current
    })
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((current)=>{
      if(current != vertex1)return current
    })
  }
  removeVertex(vertex){
    for(let key in this.adjacencyList){
       if(this.adjacencyList[key].includes(vertex)){
         this.removeEdge(vertex, key)
       }
     }
     delete this.adjacencyList[vertex]
    }
  DFSTraversal(vertex){
    let visited = {}
    let nodePath = []
    function traversalHelper(node,list){
      nodePath.push(node)
      visited[node] = true
      for(let i = 0;i<list[node].length;i++){
        console.log(list[node][i])
        if(!visited[list[node][i]]){
          traversalHelper(list[node][i], list)
        }
      }
    }
    traversalHelper(vertex,this.adjacencyList)
    return nodePath
  }
  DFSIterative(vertex){
    let visited = {}
    let nodePath = [vertex]
    let returnPath = []
    while(nodePath.length != 0){
      let currentVertex = nodePath.pop()
      if(!visited[currentVertex]){
        visited[currentVertex] = true
        returnPath.push(currentVertex)
        for(let i = 0; i<this.adjacencyList[currentVertex].length;i++){
          if(!visited[this.adjacencyList[currentVertex]]){
          nodePath.push(this.adjacencyList[currentVertex][i])
          }
        }
      }
    }
    return returnPath
  }
}


let g = new Graph()
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F")
g.addEdge("A", 'B');
g.addEdge("A", 'C');
g.addEdge("B", 'D');
g.addEdge("C", 'E');
g.addEdge('D', 'E');
g.addEdge("D", 'F');
g.addEdge("E", 'F');


