function majority(arr){
    let counter = 0;
    let major_element = null;
    for(let i=0; i<arr.length; i++){
        if (counter == 0){
            major_element = arr[i];
            counter = 1;
        }else if( arr[i] == major_element){
            counter += 1;
        }
    }
    if(counter >= Math.floor(arr.length/2)){
        return major_element;
    }else{
        return "there is no majority element";
    }
    
}
console.log(majority([1,2,2,2,2,2,2,2,2,2]));
