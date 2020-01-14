class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])this.adjacencyList[vertex]  = []
  }
  addEdge(vertex1,vertex2){//to be a directed graph, just add one of the following additions. This currently is undirected
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((current)=>{
      if(current != vertex2) return current
    })
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((current)=>{
      if(current != vertex1) return current
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
    let allNodes = []
    let visited = {}
    function traversalHelper(currentVertex, list){
      allNodes.push(currentVertex)
      visited[currentVertex] = true
      let vertexEdges = list[currentVertex]
      for(let i = 0;i<vertexEdges.length;i++){
        if(!visited[vertexEdges[i]]){
          traversalHelper(vertexEdges[i],list)
        }
      }
    }
    traversalHelper(vertex, this.adjacencyList)
    return allNodes
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


