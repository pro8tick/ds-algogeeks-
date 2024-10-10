const minCost = (s, cost) => {
    let res = 0;
    for (let i = 0, max = 0; i < s.length; i++) {
      res += cost[i];
      max = Math.max(max, cost[i]);
      if (s[i] !== s[i + 1]) {
        res -= max;
        max = 0;
      }
    }
    return res;
  };


  console.log(minCost("aaaabc",[1,2,3,4,5,6]))



  const minCost2 = (colors, needTime) => {
    if(colors.length<=1){
      return 0
    }
    let removeTime= 0,prev=0
  
    for (let curr = 1; curr < colors.length; curr++) {
       if(colors[prev]===colors[curr]){
        if(needTime[curr] < needTime[prev]){
          removeTime+=needTime[curr];
          continue;
        }
        else{
          removeTime+=needTime[prev]
        }
        
       }
       prev=curr
    }
    return removeTime;
  };


  console.log(minCost("aaaabc",[1,2,3,4,5,6]))