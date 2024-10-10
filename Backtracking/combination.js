var combine = function(n, k) {
    let result =[]
    const dp =(l,combi)=>{
        if(combi.length==k){
            result.push(combi)
            return 
        }
        for(let i = l;i<=n;i++ ){
    
            dp(i+1, [...combi, i])

        }
    }

    dp(1,[])
    return result
};