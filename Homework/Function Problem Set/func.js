function isEven(x) {
    // if(x%2==0){
    //    return console.log(true);
    // }
    // else
    // return console.log(false);
    return x % 2 === 0;
}

function factorial(x) {
    var product = 1;
    for (var i = 2; i <= x; i++) {
        product = product * i;
        return product;
    }

}