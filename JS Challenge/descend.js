function sort(arr){
    for(let m=0; m<arr.length; m++){
    for(let n=m; n< arr.length; n++){
        if(arr[m] < arr[n]){
            let temp = arr[m];
            arr[m] = arr[n];
            arr[n] = temp;
        }
    }
    }
    return arr;
}

console.log(sort([3,8,4,56,9,1]));

         