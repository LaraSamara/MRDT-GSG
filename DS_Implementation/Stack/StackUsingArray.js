class Stack{
    constructor(){
        this.items = [];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.items.length == 0) {
            console.log("Can not pop from empty Stack...");
            return;
        }
        return this.items.pop();
    }
    peek(){
        if(this.items.length == 0) {
            console.log("Empty Stack...");
            return null;
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    print(){
        if(this.items.length == 0){
            console.log("Empty Stack...");
            return;
        }
        for(let i = this.items.length-1 ; i >=0 ; --i){
            console.log(this.items[i]);
        }
    }
}