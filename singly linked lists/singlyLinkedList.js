class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        } else {
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    shift() {
        if (!this.head) {
            return undefined;
        } else {
            var current = this.head;
            this.head = current.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return current;
        }
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        } else {
            var counter = 0;
            var current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        }
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        else if (index === 0) {
            return this.unshift(val) ? true : false;
        }
        else if (index === this.length) {
            return this.push(val) ? true : false;
        }
        else {
            var newNode = new Node;
            var previous = this.get(index - 1);
            var temp = previous.next;
            previous.next = newNode;
            newNode.next = temp;
            this.length++;
            return true;
        }
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        else if (index === 0) {
            return this.shift();
        }
        else if (index === this.length) {
            return this.pop();
        }
        else {
            var previous = this.get(index - 1);
            var removed = previous.next;
            previous.next = removed.next;
            this.length--;
            return removed;
        }
    }
    reverse() {
        var node = this.head;
        this.tail = node;
        var next;
        var previous = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
    printWholeList() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
list.printWholeList();
list.pop();
list.printWholeList();
list.shift();
list.printWholeList();
list.unshift(20);
list.printWholeList();
list.get(2);
list.printWholeList();
list.set(2,33);
list.printWholeList();
list.insert(1,55);
list.printWholeList();
list.remove(1);
list.printWholeList();
list.reverse();
list.printWholeList();


