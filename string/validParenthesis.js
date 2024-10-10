var minRemoveToMakeValid = function(s) {
    if(s === ''){
        return '';
    }

    const sArray = s.split('')
    const stack  = []

    for(let i= 0; i< sArray.length; i++){
        if(sArray[i]==='('){
            stack.push(i)
        }else if(sArray[i]===')'){
            if(stack.length>0){
                stack.pop()}
            else{
                sArray[i]=""
            }
        }    
    }

    while(stack.length>0){
        sArray[stack.pop()] =""
    }
        
    

    return sArray.join('')
};