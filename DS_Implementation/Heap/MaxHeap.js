class MaxHeap{
    constructor(){
        this.heap = [null];
    }
    insert(element){
        this.heap.push(element);
        this.bubbleUp(this.heap.length-1);
    }
    bubbleUp(index){
        const ParentIndex = Math.floor(index/2);
        if(ParentIndex >= 1 && this.heap[ParentIndex] < this.heap[index]){
            [this.heap[ParentIndex], this.heap[index]] = [this.heap[index], this.heap[ParentIndex]];
            this.bubbleUp(ParentIndex);
        }
    }
    delete(){
        if(this.heap.length <= 1) return null;
        else if(this.heap.length === 2) return this.heap.pop();
        const root = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.bubbleDown(1);
        return root;
    }
    bubbleDown(index){
        const leftIndex = index * 2;
        const rightIndex = index * 2 + 1;
        let largest = index;
        if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largest]){
            largest = leftIndex;
        }
        if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largest]){
            largest = rightIndex;
        }
        if(largest !== index){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.bubbleDown(largest);
        }
    }
    heapSort(){
        const result = [];
        const original = [...this.heap];
        while(this.heap.length > 1){
            result.push(this.delete());
        }
        this.heap = original;
        return result;
    }
}