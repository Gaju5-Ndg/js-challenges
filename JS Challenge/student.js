let setStudentApi =(student,age)=>{

    console.log("1. Starting...");

    setTimeout(()=>{
      student.age = age;
      console.log("2. Api processing");

    },500)
    console.log("3. Done..");

}

let student = {
    name: "eric"
}
setStudentApi(student,40)
console.log(student);
