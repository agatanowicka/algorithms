class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.last = this.head;
        } else {
            var temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return null;
        }
        var temp = this.head;
        if (this.length === 1) {
            this.last = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return temp.value;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
}

var stack= new Stack();
stack.push(5);
stack.push(10);
stack.push(52);
stack.print();
console.log("pop " + stack.pop());
console.log("pop " + stack.pop());
stack.print();