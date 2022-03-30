const families = [{
    fatherName: "kayumba",
    motherName:"Darina",
    childrenNumber:3
},
{
    fatherName: "Yves",
    motherName:"Guillaine",
    childrenNumber:7
},
{
    fatherName: "Uwimana",
    motherName:"Sonia",
    childrenNumber:5
},
{
    fatherName: "Mukaruta",
    motherName:"Aline",
    childrenNumber:-3
}]

const ChildrenAverage = families =>{
    
    const average = (familyNumber, childrenNumber) =>{
         return Math.round(childrenNumber/familyNumber);
    }

    console.log("calculation of average is about starting......")
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let familyNumber =0, childrensNumber = 0;
            
            families.forEach(family => {
                if (family.fatherName === 'Yves') {
                    reject("Yves is not an allowed dad in 2022.")
                }
                if (family.childrenNumber < 0) {
                   return;
                }
                else{
                    family.childrenNumber ++;
                    familyNumber++;
                    childrensNumber += family.childrenNumber;
                }

            });
            
            resolve(`The average of Children Number is ${average(familyNumber,childrensNumber)}`)

        }, 1000);
    })

}

 ChildrenAverage(families)
.then(message => console.log(message))
.catch(error => console.log(error))