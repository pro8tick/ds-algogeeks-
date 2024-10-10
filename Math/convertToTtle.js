var convertToTitle = function(n) {
    if (n < 27) return String.fromCharCode(n + 64);
    var s = '';
    while (n > 0) {
        var temp = n % 26;
        temp = temp == 0 ? 26 : temp;
        s = String.fromCharCode(temp + 64) + s;
        n -= temp;
        n /= 26;
    }
    return s;
};


convertToTitle(701)