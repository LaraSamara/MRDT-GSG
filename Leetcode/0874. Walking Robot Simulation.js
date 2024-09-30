const URL = "https://leetcode.com/problems/walking-robot-simulation/description";
var robotSim = function(commands, obstacles) {
    const directions = [[0,1], [1,0], [0,-1], [-1,0]]; // N, E, S, W
    const obstaclesSet = new Set(obstacles.map(obstacle => String(obstacle)));
    let [currentDirectionIndex, x, y, maxDistance] = [0, 0, 0, 0];
    for(const command of commands){
        if(command === -1){
            currentDirectionIndex = (currentDirectionIndex+1) %  4;
        }else if(command === -2){
            currentDirectionIndex = (currentDirectionIndex+3) % 4;
        }else{
            for(let step = 0 ; step < command ; ++step){
                const[nextX, nextY] = [x + directions[currentDirectionIndex][0], y + directions[currentDirectionIndex][1]];
                if(obstaclesSet.has(String([nextX, nextY]))){
                    break;
                }
                x = nextX;
                y = nextY;
                maxDistance = Math.max(maxDistance, y*y+x*x);
            }
        }
    }
    return maxDistance;
};