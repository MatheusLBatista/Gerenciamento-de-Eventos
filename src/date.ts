let hoje: Date = new Date();

console.log(hoje);
//2024-11-04 T 23:16:30.943Z

console.log(hoje.toString());
//Mon Nov 04 2024 19:21:56 GMT-0400 (Horário Padrão do Amazonas)

console.log(hoje.toUTCString());
//Mon, 04 Nov 2024 23:22:07 GMT

console.log(`Dia: ${hoje.getDate()}`);
console.log(`Mês: ${hoje.getMonth() + 1}`);
console.log(`Ano: ${hoje.getFullYear()}`);

console.log(`Hoje: ${hoje.getDate()} / ${hoje.getMonth() + 1} / ${hoje.getFullYear()}`);

let dataNascimento:Date = new Date("2010-10-02");
console.log(dataNascimento);

let dataAtualizacaoDoSoftware: Date = new Date("2024-11-05T10:30:00");
console.log(dataAtualizacaoDoSoftware); //2024-11-05T14:30:00.000Z
console.log(dataAtualizacaoDoSoftware.toString());

