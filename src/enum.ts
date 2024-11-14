let age: number = 20;
let userName: string = "Maria";
let paymentCompleted: boolean = false;

age = 18;
userName = "Maria da Silva";
paymentCompleted = true;

//console.log(`Nome: ${userName} tem ${age} ano(s)`);

//Enum
//if i dont assign any string or number it'll be ordered as numbers from 0 on
enum Direction {
    North = "NORTH'",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
}

let directionHeaded: Direction = Direction.South;
console.log(`Direção tomada: ${directionHeaded}`);

enum Colors {
    Yellow = "#FFFF00",
    Red = "#FF0000",
    Blue = "#0000FF",
    Green = "#00FF00",
    Black = "#000",
    White = "#FFF"
}

let color: Colors = Colors.Blue;
console.log(color);

