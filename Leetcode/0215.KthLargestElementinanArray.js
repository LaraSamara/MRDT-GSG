const URL = "https://leetcode.com/problems/kth-largest-element-in-an-array/description/";
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length;
    }
    top() {
        if (this.size() < 2) return null;
        return this.heap[1];
    }
    insert(element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleUp(index) {
        const parentIndex = Math.floor(index / 2);
        if (parentIndex >= 1 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.bubbleUp(parentIndex);
        }
    }
    delete() {
        if (this.heap.length <= 1) return null;
        else if (this.heap.length == 2) return this.heap.pop();
        const root = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.bubbleDown(1);
        return root;
    }
    bubbleDown(index) {
        const leftIndex = 2 * index;
        const rightIndex = 2 * index + 1;
        let smallest = index;
        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
            smallest = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
            smallest = rightIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}
var findKthLargest = function (nums, k) {
    let minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.size() - 1 > k) minHeap.delete();
    }
    return minHeap.top();
};
// or 
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();
    for(const num of nums){
        minHeap.enqueue(num);
        if(minHeap.size() > k){
            minHeap.dequeue();
        }
    }
    return minHeap.front().element;
};