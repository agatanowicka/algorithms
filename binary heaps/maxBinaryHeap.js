class MaxBinaryHeap {
    constructor() {
        this.val = [];
    }
    insert(element) {
        this.val.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.val.length - 1;
        const element = this.val[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.val[parentIndex];
            if (element <= parent) {
                break;
            } else {
                this.val[parentIndex] = element;
                this.val[index] = parent;
                index = parentIndex;
            }
        }
    }
    printWholeList() {
        for (let i = 0; i < this.val.length; i++)
            console.log(this.val[i]);
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.printWholeList();