interface Student {
    name: string,
    age: number,
    enrolled: boolean,
    pcd?:boolean
}

let newStudent: Student = {
    name: 'Marco',
    age: 40,
    enrolled: true
}

console.log(`Nome do aluno: ${newStudent.name}`)