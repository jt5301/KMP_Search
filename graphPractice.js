class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = []; //adds a vertex / node and initializes it with an empty array to store edges / adjacent vertexes
  }
  addEdge(vertex1, vertex2) {
    //add adjacent vertexes
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeVertex(vertex) {
    for (let key in this.adjacencyList) {
      this.adjacencyList[key] = this.adjacencyList[key].filter(current => {
        if (current != vertex) return current;
      });
    }
    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      current => {
        if (current != vertex2) return current;
      }
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      current => {
        if (current != vertex1) return current;
      }
    );
  }
  DFS(vertex) {
    const visited = { vertex: 1 };
    const path = [vertex];
    function dfsHelper(vertex, list) {
      for (let i = 0; i < list[vertex].length; i++) {
        let curVertex = list[vertex][i];
        if (!visited[curVertex]) {
          visited[curVertex] += 1;
          path.push(curVertex);
          dfsHelper(curVertex, list);
        }
      }
    }
    dfsHelper(vertex, this.adjacencyList);
    return path;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
