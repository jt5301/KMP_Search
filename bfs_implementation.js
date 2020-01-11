class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this]
		while(queue.length>0){
			let currentNode = queue.shift()
			array.push(currentNode.name)
			if(currentNode.children){
				for(let i = 0;i<currentNode.children.length;i++){
					queue.push(currentNode.children[i])
				}
			}
		}
		return array
  }
}
