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
}
let g = new Graph()
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

