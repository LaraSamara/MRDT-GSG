class Graph{
    constructor(directed = false){
        this.list = {};
        this.directed = directed;
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = [];
        }
    }
    addEdge(v1,v2,weight = 1){
        if(!this.list[v1]) this.addVertex(v1);
        if(!this.list[v2]) this.addVertex(v2);
        this.list[v1].push({node:v2, weight});
        if(!this.directed){
            this.list[v2].push({node:v1, weight});
        }
    }
    removeEdge(v1,v2){
        if(this.list[v1]){
            this.list[v1] = this.list[v1].filter(v => v.node !== v2);
            if(this.list[v2] && !this.directed){
                this.list[v2] = this.list[v2].filter(v => v.node !== v1);
            }
        }
    }
    isNeighbor(v1,v2){
        return this.list[v1]?this.list[v1].some(v => v.node === v2):false;
    }
    countNeighbors(v){
        return this.list[v]?this.list[v].length:0;
    }
    print(){
        for(const key in this.list){
            const neighbor = this.list[key].map(v => `${v.node}, weight: ${v.weight}`).join(",");
            console.log(`${key}: ==> ${neighbor}`);
        }
    }
    DFS(vertex){
        if(!this.list[vertex]) return [];
        let visited = new Set();
        let stack = [vertex];
        let result = [];
        while(stack.length != 0){
            const current = stack.pop();
            if(!visited.has(current)){
                visited.add(current);
                result.push(current);
                for(const neighbor of this.list[current]){
                    if(!visited.has(neighbor.node)){
                        stack.push(neighbor.node);
                    }
                }
            }
        }
        return result;
    }
    BFS(vertex){
        if(!this.list[vertex]) return [];
        let visited = new Set();
        let queue = [vertex];
        let result = [];
        while(queue.length != 0){
            const current = queue.shift();
            if(!visited.has(current)){
                visited.add(current);
                result.push(current);
                for(const neighbor of this.list[current]){
                    if(!visited.has(neighbor.node)){
                        queue.push(neighbor.node);
                    }
                }
            }
        }
        return result;
    }
    Dijkstra(start){
        if(!this.list[start]) return {};
        let distances = {};
        let previous = {};
        let unVisited = new Set(Object.keys(this.list));
        for(const vertex in this.list){
            distances[vertex] = Infinity;
            this.previous = null;
        }
        distances[start] = 0;
        while(unVisited.size > 0){
            let closestVertex = null;
            for(const vertex of unVisited){
                if(closestVertex == null || distances[closestVertex] > distances[vertex]){
                    closestVertex = vertex;
                }
            }
            if(distances[closestVertex] === Infinity) break;
            unVisited.delete(closestVertex);
            for(const neighbor of this.list[closestVertex]){
                const newDist = distances[closestVertex] + neighbor.weight;
                if(newDist < distances[neighbor.node]){
                    distances[neighbor.node] = newDist;
                    previous[neighbor.node] = closestVertex;
                }
            }
        }
        let result = {};
        for(const vertex in distances){
            result[vertex] ={
                distance: distances[vertex],
                path:this._BuildPath(previous, vertex)
            };
        }
        return result;
    }
    _BuildPath(prev, end){
        let path =[];
        let current = end;
        while(current){
            path.unshift(current);
            current = prev[current];
        }
        return path;
    }
}


