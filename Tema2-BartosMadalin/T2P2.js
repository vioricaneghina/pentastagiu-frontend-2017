var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];

var arr_filtered = arr.filter(function(s) {
    if(s!=2)
        return s;
});

console.log(arr_filtered);