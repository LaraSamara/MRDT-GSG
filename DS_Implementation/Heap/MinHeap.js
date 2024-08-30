class MinHeap{
    constructor(){
        this.heap = [null];
    }
    insert(element){
        this.heap.push(element);
        this.bubbleUp(this.heap.length-1);
    }
    bubbleUp(index){
        const parentIndex = Math.floor(index/2);
        if(parentIndex >= 1 && this.heap[parentIndex] > this.heap[index]){
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.bubbleUp(parentIndex);
        }
    }
    delete(){
        if(this.heap.length <= 1) return null;
        else if(this.heap.length == 2) return this.heap.pop();
        const root = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.bubbleDown(1);
        return root;
    }
    bubbleDown(index){
        const leftIndex = 2 * index;
        const rightIndex = 2 * index + 1;
        let smallest = index;
        if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
            smallest = leftIndex;
        }
        if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]){
            smallest = rightIndex;
        }
        if(smallest !== index){
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
    heapSort(){
        const result = [];
        const originalHeap = [...this.heap];
        while(this.heap.length > 1){
            result.push(this.delete());
        }
        this.heap = originalHeap;
        return result;
    }
}