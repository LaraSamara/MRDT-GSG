class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        let node = new Node(value);
        if(!this.top){
            this.top = node;
            return;
        }
        node.next = this.top;
        this.top = node;
    }
    pop(){
        if(!this.top) {
            console.log("Can not pop from empty Stack...");
            return;
        }
        let value = this.top.value;
        let node = this.top;
        this.top = this.top.next;
        node = null;
        return value;
    }
    peek(){
        if(!this.top) {
            console.log("Empty Stack...");
            return;
        }
        return this.top.value;
    }
    isEmpty(){
        return this.top == null;
    }
    print(){
        if(!this.top) {
            console.log("Empty Stack...");
            return null;
        }
        let tmp = this.top;
        while(tmp){
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
}
