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
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjancyList = this.adjancyList;
        (function dfs(vertex) {
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjancyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);
        return result;
    }
    depthFirstIterate(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjancyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const visited = {};
        const result = [];
        let currentVertex;
        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjancyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}
let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterate("A"));
console.log(g.breadthFirst("A"));
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
