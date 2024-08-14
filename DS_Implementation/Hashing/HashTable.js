// Implementation
function IsPrime(num){
    if(num === 2 || num === 3) return true;
    else if(num % 2 ===0 || num % 3 === 0 || num <= 1) return false;
    for(let i = 5 ; i * i <= num ; i += 6){
        if(num % i === 0 || num % (i+2) === 0) return false;
    }
    return true;
}
function NextPrime(num){
    while(!IsPrime(num)){
        num++;
    }
    return num;
}
class HashTable{
    constructor(size){
        this.size = NextPrime(size);
        this.table = new Array(this.size);
    }
    hashFunction(key){
        let hash = 0;
        for(let i = 0 ; i < key.length ; ++i){
            hash = (hash + key.charCodeAt(i)*i)%this.size;
        }
        return hash;
    }
    insert(key, value){
        const index = this.hashFunction(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push([key,value]);
    }
    get(key){
        const index = this.hashFunction(key);
        if(this.table[index]){
            for(const[k,v] of this.table[index]){
                if(k === key){
                    return v;
                }
            }
        }
        return undefined;
    }
}
const table = new HashTable(50);
table.insert(5, 1);
console.log(table.size);
console.log(table.get(5));