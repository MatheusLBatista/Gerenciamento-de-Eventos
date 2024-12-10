import fs from 'fs';

const filePath: string = './data/estudante.txt';
let content: string = '';

try {
    content = fs.readFileSync(filePath, 'utf-8');
} catch (error) {
    console.log(`${(error as Error).message}`);
}

let lines: string [] = [];

if(content) {
    lines = content.split('\n');
    //console.log(lines[2])
    //console.log(lines.length);
    //lines.push("Emília");
    //console.log(lines.length);
    //console.log(lines[4]);
    lines.forEach((line, key) => console.log(`${key} - ${line}`))
}

//console.log(content);
//write in the document

try {
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log("File successfully saved!")
} catch (error) {
    console.log(`${(error as Error).message}`);
}


