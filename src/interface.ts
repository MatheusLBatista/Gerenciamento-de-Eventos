interface Student {
    name: string,
    age: number,
    enrolled: boolean,
    pcd?:boolean,
    address: {
        thoroughfare: string,
        neighbourhood: string,
        number: string,
        city: string,
        state: string
    },
    subjects: string[]
}

let newStudent: Student = {
    name: 'Marco',
    age: 40,
    enrolled: true,
    address: {
        thoroughfare: "Avenida Jô Sato",
        number: "5452",
        neighbourhood: "Barão do Melgaço III",
        city: "Vilhena",
        state: "RO"
    },
    subjects: ["Mathematics", "Geography", "Philosophy"]
}

newStudent.enrolled ? console.log("Matriculado: sim") : console.log("Matriculado: não");
//console.log(newStudent);
//console.log(newStudent.subjects[1]);
//console.log(newStudent.address.city);
//console.log(`Nome do aluno: ${newStudent.name}`);