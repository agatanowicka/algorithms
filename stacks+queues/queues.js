class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return newNode;
    }
    dequeue() {
        if (this.length === 0) {
            return undefined;
        }
        var temp = this.head;
        if (this.length === 1) {
            this.last = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return temp.val;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

}

let q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(22);
q.enqueue(3);
q.enqueue(1);
q.print()
console.log("dequeue "+q.dequeue());
console.log("dequeue "+q.dequeue());
console.log("dequeue "+q.dequeue());
q.print()