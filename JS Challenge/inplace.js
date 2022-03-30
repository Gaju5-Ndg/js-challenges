function inplaceArr(arr){ 
 //let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length-1;

for(let i=0; i<=n/2; i++) {
  let temp = arr[i];
  arr[i] = arr[n-i];
  arr[n-i] = temp;
}
return arr;
}
console.log(inplaceArr([1,2,3,4,5,6,7]));
