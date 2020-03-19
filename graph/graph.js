class Graph {
    constructor() {
        this.adjancyList = {};
    }
    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjancyList[v1].push(v2);
        this.adjancyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(v => v !== vertex2);
        this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjancyList[vertex].length) {
            const adjacentVertex = this.adjancyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjancyList[vertex];
    }
}
let g = new Graph();
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
console.log(g);
g.removeEdge("Dallas","Aspen");
console.log(g);
g.removeVertex("Dallas");
console.log(g);
