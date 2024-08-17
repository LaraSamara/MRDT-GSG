class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
class  BST{
    constructor(){
        this.root = null;
    }
    insert(value){
    this.root = this._insert(this.root, value);
    }
    _insert(root, value){
        if(!root) return new Node(value);
        else if(root.value > value) root.left = this._insert(root.left, value);
        else if(root.value < value) root.right = this._insert(root.right, value);
        return root;
    }
    inOrder(){
        this._inOrder(this.root);
    }
    _inOrder(root){
        if(!root) return;
        this._inOrder(root.left);
        console.log(root.value);
        this._inOrder(root.right);
    }
    search(value){
        return _search(this.root, value);
    }
    _search(root, value){
        if(!root) return false;
        else if(root.value == value) return true;
        else if(root.value > value) return _search(root.left, value);
        else if(root.value < value) return _search(root.right, value);
    }
    delete(value){
        this.root = this._delete(this.root, value);
    }
    _delete(root, value){
        if(!root) return null;
        else if(root.value > value) root.left =  this._delete(root.left, value);
        else if(root.value < value) root.right = this._delete(root.right, value);
        else{
        // case 1: Node with No Children
        if(!root.left && !root.right) return null;
        // case 2: Node with One Child
        else if(!root.left) return root.right;
        else if (!root.right) return root.left;
        // case 3: Node with Two Children
        let successor = this.findMin(root.right);
        root.value = successor.value;
        root.right =  this._delete(root.right, successor.value);
        }
        return root;
    }
    findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
}

