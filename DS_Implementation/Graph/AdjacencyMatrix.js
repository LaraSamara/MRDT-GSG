class Graph{
    constructor(size, directed = false){
        this.size = size;
        this.matrix = Array.from({length:this.size},()=> Array(size).fill(0));
        this.vertices = {};
        this.vertexCount = 0;
        this.directed = directed;
    }
    addNode(vertex){
        if(!this.vertices[vertex] && this.vertexCount < this.size){
            this.vertices[vertex] = this.vertexCount;
            this.vertexCount++;
        }else{
            console.log("vertex is already exists or vertex limit reached...");
        }
    }
    addEdge(v1,v2, weight = 0){
        if(typeof this.vertices[v1] === undefined) this.addNode(v1);
        if(typeof this.vertices[v2] === undefined) this.addNode(v2);
        const i = this.vertices[v1];
        const j = this.vertices[v2];
        if(typeof i !== undefined && typeof j !== undefined){
            this.matrix[i][j] = weight;
            if(!this.directed){
                this.matrix[j][i] = weight;
            }
        }else{
            console.log("Cannot add edge, one of the vertices does not exist or vertex limit reached");
        }
    }
    removeEdge(v1,v2){
        const i = this.vertices[v1];
        const j = this.vertices[v2];
        if(typeof i !== undefined && typeof j !== undefined){
            this.matrix[i][j] = 0;
            if(!this.directed){
                this.matrix[j][i] = 0;
            }
        }
    }
    printGraph(){
        console.log(Object.keys(this.vertices).join(" "));
        for(let i = 0 ; i < this.size ; ++i){
            let row = this.matrix[i].join(" ");
            console.log(`${Object.keys(this.vertices)[i]} ${row}`);
        }
    }
    DFS(vertex){
        if(typeof this.vertices[vertex] === undefined){
            console.log("vertex not found..!");
            return [];
        }
        let visited = new Set();
        let result = [];
        let stack = [vertex];
        while(stack.length != 0){
            const current = stack.pop();
            if(!visited.has(current)){
                visited.add(current);
                result.push(current);
                const currentIndex = this.vertices[current];
                for(let i = 0 ; i < this.size ; ++i){
                    if(this.matrix[currentIndex][i] != 0){
                        const neighborVertex = Object.keys(this.vertices)[i];
                        if(!visited.has(neighborVertex)){
                            stack.push(neighborVertex);
                        }
                    }
                }
            }
        }
        return result;
    }
    BFS(vertex){
        if(typeof this.vertices[vertex] === undefined){
            console.log("vertex not found..!");
            return [];
        }
        let visited = new Set();
        let result = [];
        let queue = [vertex];
        while(queue.length != 0){
            const current = queue.shift();
            if(!visited.has(current)){
                visited.add(current);
                result.push(current);
                const currentIndex = this.vertices[current];
                for(let i = 0 ; i < this.size ; ++i){
                    if(this.matrix[currentIndex][i] != 0){
                        const neighborVertex = Object.keys(this.vertices)[i];
                        if(!visited.has(neighborVertex)){
                            queue.push(neighborVertex);
                        }
                    }
                }
            }
        }
        return result;
    }
    Dijkstra(start){
        if(typeof this.vertices[start] === undefined){
            console.log("Start vertex not found..!");
            return {};
        }
        let distances = {};
        let previous = {};
        let unVisited = new Set(Object.keys(this.vertices));
        for(const vertex in this.vertices){
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }
        distances[start] = 0;
        while(unVisited.size > 0){
            let closestVertex = null;
            for(const vertex of unVisited){
                if(closestVertex === null || distances[closestVertex] > distances[vertex]){
                    closestVertex = vertex;
                }
            }
            if(distances[closestVertex] === Infinity) break;
            unVisited.delete(closestVertex);
            const currentIndex = this.vertices[closestVertex];
            for(let i = 0 ; i < this.size ; ++i){
                if(this.matrix[currentIndex][i] > 0){
                    let vertex = Object.keys(this.vertices)[i];
                    const newDist = distances[closestVertex] + this.matrix[currentIndex][i];
                    if(distances[vertex] > newDist){
                        distances[vertex] = newDist;
                        previous[vertex] = closestVertex;
                    }
                }
            }
        }
        let result = {};
        for(const vertex in this.vertices){
            result[vertex] = {
                distance: distances[vertex],
                path: this._BuildPath(previous,vertex)
            };
        }
        return result;
    }
    _BuildPath(prev, end){
        let path = [];
        let current = end;
        while(current){
            path.unshift(current);
            current = prev[current];
        }
        return path;
    }
}