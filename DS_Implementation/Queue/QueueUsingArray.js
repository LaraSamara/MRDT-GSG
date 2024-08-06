class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(value){
        this.items.push(value);
    }
    dequeue(){
        if(this.items.length == 0) {
            console.log("Can not dequeue from empty Queue...");
            return;
        }
        return this.items.shift();
    }
    peek(){
        if(this.items.length == 0) {
            console.log("Empty Queue...");
            return;
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    print(){
        console.log(this.items);
    }
}