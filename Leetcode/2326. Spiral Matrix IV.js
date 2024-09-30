const URL = "https://leetcode.com/problems/spiral-matrix-iv/description/";
var spiralMatrix = function(m, n, head) {
    const array = Array.from({length: m}, ()=> new Array(n).fill(-1));
    let[left, right, top, bottom] = [0, n-1, 0, m-1];
    const directions = [[1, 0], [0, -1]];
    while(head){
            //1. left to right
    for(let i = left ; i <= right ; ++i){
        if(!head) return array;
        array[top][i] = head.val;
        head = head.next;
    }
    top++;
    //2. top to bottom
    for(let i = top ; i <= bottom ; ++i){
        if(!head) return array;
        array[i][right] = head.val;
        head = head.next;
    }
    right--;
    //3. right to left
    for(let i = right ; i >= left ; i--){
        if(!head) return array;
        array[bottom][i] = head.val;
        head = head.next;
    }
    bottom--;
    //4. bottom to top
    for(let i = bottom ; i >= top ; i--){
        if(!head) return array;
        array[i][left] = head.val;
        head = head.next;
    }
    left++;
    }
    return array;
};
// another solu
var _spiralMatrix = function(m, n, head) {
    const array = Array.from({length: m}, () => new Array(n).fill(-1));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let[r, c, d] = [0, 0, 0];
    while(head){
        let[dr, dc] = directions[d];
        while(head && (r >= 0 && r <= m-1) && (c >= 0 && c <= n-1) && (array[r][c] === -1)){
            array[r][c] = head.val;
            head = head.next;
            [r, c] = [r + dr, c + dc];
        }
        [r, c] = [r-dr, c-dc];
        d = (d+1) % 4;
        [dr, dc] = directions[d];
        [r, c] = [r+dr, c+dc];
    }
    return array;
};