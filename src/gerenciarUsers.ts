import { v4 as uuid } from 'uuid';

enum Role {
    admin = "ADMIN",
    user = "USER",
    guest = "GUEST"
}

interface User {
    id: string,
    nome: string, 
    role: Role
}

function createUser(nome: string, role: Role): User {
    return{
        id: uuid(),
        nome, 
        role
    };
}

//let user1 = createUser("João", Role.user)
let users: User[] = [
    createUser("Matheus", Role.admin),
    createUser("Danielle", Role.guest)
]; 

console.log(users);