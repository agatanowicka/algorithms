class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val === current.val) {
                    return undefined;
                }
                else if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(val) {
        if (this.root === null) {
            return false;
        } else {
            var current = this.root;
            var found = false;
            while (current && !found) {
                if (val < current.val) {
                    current = current.left;
                }
                else if (val > current.val) {
                    current = current.right;
                } else {
                    found = true;
                }
            }
            if (!found) {
                return undefined;
            } else {
                return current;
            }
        }
    }
    BFS() {
        var node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.val);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(2))
console.log( "BFS " +tree.BFS());
console.log("DFSPreOrder" + tree.DFSPreOrder());
console.log("DFSPostOrder" + tree.DFSPostOrder());
console.log("DFSInOrder" + tree.DFSInOrder());
