var spiralOrder = function(matrix) {
    const result= []
    let left= 0;
    let top=0;
    let right=matrix[0].length-1;
    let bottom =matrix.length -1;
    let direction = 'right';

    while(left<=right && top<=bottom){
        if(direction==='right'){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i])
            }
            top+=1;
            direction='down'
        }
        else if(direction==='down'){
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right])
            }
            right-=1;
            direction='left'
        }
        else if(direction==='left'){
            for(let i=right;i>=left;i--){
                result.push(matrix[bottom][i])
            }
            bottom-=1;
            direction='up'
        }
        else if(direction==='up'){
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left])
            }
            left+=1;
            direction='right'
        }

    }
    return result
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let sum = "";
    let carry = 0;
    
    while( i >= 0 || j >= 0 || carry > 0){
        const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
        const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
        const digitSum = digit1 + digit2 + carry;
        
        sum = (digitSum >= 10 ? digitSum % 10 : digitSum) + sum;
        carry = digitSum >= 10 ? 1 : 0;
        
        i--;
        j--;
    }
    
    return sum;
};