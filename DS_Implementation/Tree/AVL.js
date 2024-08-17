class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}
class AVL{
    constructor(){
        this.root = null;
    }
    height(node){
        return node? node.height:0;
    }
    getBalanceFactor(node){
        return node? this.height(node.left) - this.height(node.right): 0;
    }
    rotateLeft(root){
        // The new Root is the Right child
        let newRoot = root.right;
        // The Left sub-tree of the new root
        let leftSubTree = newRoot.left;
        // Perform Rotation
        newRoot.left = root;
        root.right = leftSubTree;
        // Update height
        root.height = Math.max(this.height(root.right), this.height(root.left)) + 1;
        newRoot.height = Math.max(this.height(newRoot.right), this.height(newRoot.left)) + 1;
        // return new root
        return newRoot;
    }
    rotateRight(root){
        // The new Root is the Left child
        let newRoot = root.left;
        // The Right sub-tree of new root
        let rightSubTree = newRoot.right;
        //Perform Rotation
        newRoot.right = root;
        root.left = rightSubTree;
        // Update height
        root.height = Math.max(this.height(root.right), this.height(root.left)) + 1;
        newRoot.height = Math.max(this.height(newRoot.right), this.height(newRoot.left)) + 1;
        // return new root
        return newRoot;
    }
    insert(value){
        this.root = this._insert(this.root, value);
    }
    _insert(root, value){
        // Perform the normal BST insertaion 
        if(!root) return new Node(value);
        else if(root.value > value) root.left = this._insert(root.left, value);
        else if(root.value < value) root.right = this._insert(root.right, value);
        else return root; // Duplicate value is not allowed
        // update root height
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        // get the balance factor
        const balanceFactor = this.getBalanceFactor(root);
        // balance the root if it has become unbalanced 
        // 1. LEFT LEFT CASE
        if(balanceFactor > 1 && value < root.left.value){
            // Right Rotate
            return this.rotateRight(root);
        }
        // 2. RIGHT RIGHT CASE 
        if(balanceFactor < -1 && value > root.right.value){
            // Left Rotate 
            return this.rotateLeft(root);
        }
        // 3. LEFT RIGHT CASE 
        if(balanceFactor > 1 && value > root.left.value){
            root.left = this.rotateLeft(root.left);
            return this.rotateRight(root);
        }
        // 4. RIGHT LEFT CASE 
        if(balanceFactor < -1 && value < root.right.value){
            root.right = this.rotateRight(root.right);
            return this.rotateLeft(root);
        }
        // return unchanged value
        return root;
    }
    minValue(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
    delete(value){
        this.root = this._delete(this.root, value);
    }
    _delete(root, value){
        if(!root) return null;
        else if(value < root.value) root.left = this._delete(root.left, value);
        else if(value > root.value) root.right = this._delete(root.right, value);
        else{
            if(!root.left && !root.right) return null;
            else if(!root.left) return root.right;
            else if(!root.right) return root.left;
            let minimum = this.minValue(root.right);
            root.value = minimum.value;
            root.right = this._delete(root.right, minimum.value);
        }
        if(!root) return null;
        // update root height
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        // get the balance factor of this root
        const balanceFactor = this.getBalanceFactor(root);
        // balance the node if it has become unbalanced
        // 1. LEFT LEFT CASE 
        if(balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0){
            return this.rotateRight();
        }
        // 2. LEFT RIGHT CASE 
        if(balanceFactor > 1 && this.getBalanceFactor(root.left) < 0){
            root.left = this.rotateLeft(root.left);
            return this.rotateRight(root);
        }
        // 3. RIGHT RIGHT CASE 
        if(balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0){
            return this.rotateLeft(root);
        }
        // 3. RIGHT LEFT CASE   
        if(balanceFactor < -1 && this.getBalanceFactor(root.right) > 0){
            root.right = this.rotateRight(root.right);
            return this.rotateLeft(root);
        }
            return root;
    }
    search(value){
        return this._search(this.root, value);
    }
    _search(root, value){
        if(!root) return false;
        else if(root.value > value) return this._search(root.left, value);
        else if(root.value < value) return this._search(root.right, value);
        else if(root.value == value) return true;
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
}