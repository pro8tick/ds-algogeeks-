var findLeastNumOfUniqueInts = function(arr, k) {
    let dub = {},u=0
    for(let i=0;i<arr.length;i++){
        if(!dub[arr[i]]){
            dub[arr[i]]=0
            u++
        }
        dub[arr[i]]++
    }
    var counter= Object.entries(dub).sort((a,b)=>{
        return a[1]-b[1]
    })
    for(var i=0;i<counter.length;i++){
        if(k>=counter[i][1]){
            k=k-counter[i][1]
            u--
        }else{
            break;
        }
    }
    return u
    
};
var arr= [25,2,2,2,3,3,6,6,8,7]
const res=findLeastNumOfUniqueInts(arr,6)
console.log(res)