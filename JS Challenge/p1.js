function primeArray(arr){
    let newArr = [];

    function isPrime(n){
        if(n<2)
        return false;
        if (n==2)
        return true;
        let maxDiv = Math.sqrt(n);
        for(let i = 2; i <= maxDiv; i++){
            if(n%i == 0){
                return false;
            }
        }
        return true;
    }

    for(let i= 0; i< arr.length; i++){
        if(isPrime(i)){
            newArr.push(i);
        }
    }
    return newArr
}
console.log(primeArray([0,1,2,3,4,5,6,7,8,9,10]));