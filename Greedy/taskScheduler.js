var leastInterval = function(tasks, n) {
    const m = new Map();

    let maxValue = 0;

    let maxValueCount = 0

    for(let t of tasks){
        let val = m.has(t)? m.get(t)+1: 1;
        m.set(t,val);
        if(val>maxValue){
            maxValue=val
            maxValueCount=1
        }else if(val===maxValue){
            maxValueCount++
        }
    }
    return Math.max(tasks.length, (maxValue-1)*(n+1) + maxValueCount)
};


