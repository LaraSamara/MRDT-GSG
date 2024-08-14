class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.head = null;
    }
    addFirst(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return ; 
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let tmp = this.head;
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.next = newNode;
    }
    traverse(){
        if(!this.head){
            console.log("Linked List is Empty...");
            return;
        }
        let tmp =this.head;
        while(tmp){
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
    deleteFirst(){
        if(!this.head){
            console.log("Linked List is Empty...");
            return;
        }
        let deleted = this.head;
        this.head = this.head.next;
        deleted = null;
    }
    deletedLast(){
        if(!this.head){
            console.log("Linked List is Empty...");
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let tmp = this.head;
        while(tmp.next.next){
            tmp = tmp.next;
        }
        let deleted = tmp.next;
        tmp.next = null;
        deleted = null;
    }
    addAtPosition(pos, value){
        if(pos < 0){
            console.log("position can not be negative");
            return;
        }else if(pos == 0){
            this.addFirst(value);
            return;
        }
        let newNode = new Node(value);
        let tmp = this.head;
        while(--pos && tmp){
            tmp = tmp.next;
        }
        if(!tmp){
            console.log("position out of bound..");
            return;
        }
        newNode.next = tmp.next;
        tmp.next = newNode;
    }
    deleteAtPosition(pos){
        if(pos < 0){
            console.log("position can not be negative");
            return;
        }else if(!this.head){
            console.log("Linked List Is empty...");
            return;
        }else if(pos == 0){
            this.deleteFirst();
            return;
        }
        let tmp = this.head;
        while(--pos &&  tmp){
            tmp = tmp.next;
        }
        if(!tmp || !tmp.next){
            console.log("Position out of bound..");
            return;
        }
        let deleted = tmp.next;
        tmp.next = tmp.next.next;
        deleted = null;
    }
    reverse(){
        if(!this.head){
            console.log("Linked List is empty...");
            return;
        }
        let prev = null;
        let curr = this.head;
        let next = curr;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}