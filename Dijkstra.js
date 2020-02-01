class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }
  dijkstraPath(start, end) {
    let distance = {};
    let previous = {};
    let visited = {};
    let path = [];
    let nextMin = new PriorityQueue();

    for (let key in this.adjacencyList) {
      if (key === start) {
        distance[key] = 0;
        nextMin.enqueue(key, 0);
      } else {
        distance[key] = Infinity;
      }
      previous[key] = null;
    }
    while (nextMin.queue.length != 0) {
      debugger;
      let current = nextMin.dequeue().value;
      if (current === end) {
        while (current) {
          path.push(current);
          current = previous[current];
        }
        console.log(distances);
        break;
      }
      if (!visited[current]) {
        for (let i = 0; i < this.adjacencyList[current].length; i++) {
          let neighborNode = this.adjacencyList[current][i];
          let potentialLow = distance[current] + neighborNode.weight;
          console.log(potentialLow);
          if (potentialLow < distance[neighborNode.node]) {
            distance[neighborNode.node] = potentialLow;
            previous[neighborNode.node] = current;
            nextMin.enqueue(neighborNode.node, potentialLow);
          }
        }
        visited[current] = true;
      }
    }
    return path;
  }
}

// graph.dijkstraPath('A','E')
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(value, priority) {
    this.queue.push({ value: value, priority: priority });
    this.sort();
  }
  dequeue() {
    return this.queue.shift();
  }
  sort() {
    this.queue.sort((a, b) => {
      return a.priority - b.priority;
    });
  }
}
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
