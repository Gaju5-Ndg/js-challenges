setStudentApi= (student, age) =>{

    return new Promise( function (resolve ,reject)
    {
        setTimeout(()=>{
            student.age = age;
            
            if( age<0 ){
                reject('bad age')
            }
            else {
                resolve(student)
            }

        },500)
        
    })
}
let student = {
    name: "Gaju"
}
setStudentApi(student,-43)
.then(message => console.log(message))
.catch(err => console.log(err))


