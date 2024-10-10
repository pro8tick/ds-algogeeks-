const merge = (interval)=>{
    interval.sort((a,b)=> a[0]-b[0])

    for(var i=1; i< interval.length;i++){
        if(interval[i-1][1]>=interval[i][0]){
          interval[i-1] = Math.max(interval[i-1][1],interval[i][1])
          interval.splice(i,1)
          i-- 
        }
    }
    return interval;
}