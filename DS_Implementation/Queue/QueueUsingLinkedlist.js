class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.rear = null;
        this.front = null;
    }
    enqueue(value){
        let node = new Node(value);
        if(!this.rear && !this.front){
            this.rear = this.front = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
        
    }
    dequeue(){
        if(!this.rear && !this.front) {
            console.log("Can not dequeue from empty Queue...");
            return;
        }else if(this.rear == this.front){
            let value = this.front.value;
            this.rear = this.front = null;
            return value;
        }
        let node = this.front;
        let value = node.value;
        this.front = this.front.next;
        node = null;
        return value;
    }
    peek(){
        if(!this.rear && !this.front) {
            console.log("Empty Queue...");
            return;
        }
        return this.front.value;
    }
    isEmpty(){
        return !this.rear && !this.front;
    }
    print(){
        if(!this.rear && !this.front) {
            console.log("Empty Queue...");
            return null;
        }
        let tmp = this.front;
        while(tmp != null){
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
}
