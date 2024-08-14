class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DLL{
    constructor(){
        this.head = null;
    }
    addFirst(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
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
        newNode.prev = tmp;
    }
    traverse(){
        if(!this.head){
            console.log("Linked List is already empty...");
            return;
        }
        let tmp = this.head;
        while(tmp){
            console.log(tmp.value);
            tmp = tmp.next;
        }
    }
    addAfter(data, value){
        if(!this.head){
            console.log("Linked List is already empty...");
            return;
        }
        let tmp = this.head;
        while(tmp && tmp.value != data){
            tmp = tmp.next
        }
        if(!tmp){
            console.log("data not found..");
            return;
        }else if(!tmp.next){
            this.addLast(value);
            return;
        }
        let newNode = new Node(value);
        newNode.next = tmp.next;
        tmp.next.prev = newNode;
        newNode.prev = tmp;
        tmp.next = newNode;
    }
    deleteFirst(){
        if(!this.head){
            console.log("List Is already empty ...");
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }
    deleteLast(){
        if(!this.head){
            console.log("List Is already empty ...");
            return;
        }
        if(!this.head.next){
            this.head = null;
            return
        }
        let tmp = this.head;
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.prev.next = null; 
        tmp.prev = null;
    }
    deleteAtPos(pos){
        if(pos < 0 ){
            console.log("Position Cannot be negative...");
            return;
        }else if(!this.head){
            console.log("DLL is empty...!");
            return;
        }else if(pos == 0){
            this.deleteFirst();
            return;
        }
        let tmp = this.head;
        while(--pos  && tmp){
            tmp = tmp.next;
        }
        if(!tmp || !tmp.next){
            console.log("index out of bound....");
            return;
        }
        let deleted = tmp.next;
        tmp.next = tmp.next.next;
        if(deleted.next){
            tmp.next.prev = deleted.prev;
        }
        deleted = null;
    }
    addAtPosition(data,pos){
        if(pos < 0){
            console.log("position cannot be less than zero....");
            return;
        }else if(!this.head && pos > 0){
            console.log("DLL is already empty....!");
            return;
        }else if(pos == 0){
            this.addFirst(data);
            return;
        }
        let tmp = this.head;
        while(--pos && tmp){
            tmp = tmp.next;
        }
        if(!tmp ){
            console.log("Index out of bounds...!");
            return;
        }else if(!tmp.next){
            this.addLast(data);
            return;
        }
        let newNode = new Node(data);
        newNode.next = tmp.next;
        tmp.next.prev = newNode;
        tmp.next = newNode;
        newNode.prev = tmp;
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        let next;
        while(curr){
            next = curr.next;
            curr.next = prev;
            curr.prev = next;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}