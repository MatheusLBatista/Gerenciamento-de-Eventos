"use strict";
let age = 20;
let userName = "Maria";
let paymentCompleted = false;
age = 18;
userName = "Maria da Silva";
paymentCompleted = true;
//console.log(`Nome: ${userName} tem ${age} ano(s)`);
//Enum
//if i dont assign any string or number it'll be ordered as numbers from 0 on
var Direction;
(function (Direction) {
    Direction["North"] = "NORTH'";
    Direction["South"] = "SOUTH";
    Direction["East"] = "EAST";
    Direction["West"] = "WEST";
})(Direction || (Direction = {}));
let directionHeaded = Direction.South;
console.log(`Direção tomada: ${directionHeaded}`);
var Colors;
(function (Colors) {
    Colors["Yellow"] = "#FFFF00";
    Colors["Red"] = "#FF0000";
    Colors["Blue"] = "#0000FF";
    Colors["Green"] = "#00FF00";
    Colors["Black"] = "#000";
    Colors["White"] = "#FFF";
})(Colors || (Colors = {}));
let color = Colors.Blue;
console.log(color);
