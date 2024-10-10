var maxProfit = function(prices) {
    let diff = 0
    if (prices.length > 0) { // []
        prices.reduce((acc, next) => {
            if (next > acc) {
                diff += next - acc
            }
            return next
        })
    }
    return diff
};


console.log(maxProfit([4,2,3,2,7,4,5]))