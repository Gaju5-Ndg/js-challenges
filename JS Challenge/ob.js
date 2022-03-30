function objProvider(arr){

    for(let i=0; i < arr.length; i++){
        let word = arr[i].split(" ");
        return { [`${word[0]}`]:{
            'second-name':word[1],
            'Age':`${word[2]}`}
         }
        }
    }
let arr = ['Patrick wyne, 30', 'lil wyne, 32','Eric mimi, 21','Dodosdeck, 21','Alian Dwine, 22','Patrick wyne, 33','Patrick wyne, 100','Patrick wyne, 40'];
console.log(objProvider(arr));

