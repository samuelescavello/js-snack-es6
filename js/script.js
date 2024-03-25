// ***********************************************SNACK 1*************************************************************COMPLEATED****************

// let arrInvitati = [ 
//     'Brad Pitt', 
//     'Johnny Depp', 
//     'Lady Gaga', 
//     'Cristiano Ronaldo', 
//     'Georgina Rodriguez', 
//     'Chiara Ferragni',  
//     'George Clooney', 
//     'Amal Clooney', 
//     'Fedez', 
//     'Amadeus', 
//     'Fiorello'
// ];

// arrInvitati.push("amadeus");

// prova()

// function prova (argomento){

// }

// const listTipografy = arrInvitati.map(  (el , i) => {
//     const finaList = {
//         tableName : 'tavolo vip',
//         guestName : el,
//         place : i + 1
//     }
//     return finaList
// })
// console.log(listTipografy)

// ***********************************************SNACK 1*************************************************************COMPLEATED****************

// let aula = [
//     {
//         Id: '213',
//         Name: 'Marco della Rovere',
//         Grades: '78',
//     },
//     {
//         Id: '110',
//         Name: 'Paola Cortellessa',
//         Grades: '96',
//     },
//     {
//         Id: '250',
//         Name: 'Andrea Mantegna',
//         Grades: '48',
//     },
//     {
//         Id: '145',
//         Name: 'Gaia Borromini',
//         Grades: '74',
//     },
//     {
//         Id: '196',
//         Name: 'Luigi Grimaldello',
//         Grades: '68',
//     },
//     {
//         Id: '102',
//         Name: 'Piero della Francesca',
//         Grades: '50',
//     },
//     {
//         Id: '120',
//         Name: 'Francesca da Polenta',
//         Grades: '84',
//     },
// ]

// let listName = aula.map(el => el.Name.toUpperCase());
// console.log(listName)

// let voti = aula.filter(el => el.Grades > 70);
// console.log(voti)

// let votiEid = aula.filter(el => el.Grades > 70 && el.Id > 120);
// console.log(votiEid)

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


let biciDaCorsa = [
    { nome: "Bianchi Oltre XR4", peso: 7.1 },
    { nome: "Specialized Tarmac SL7", peso: 7.3 },
    { nome: "Trek Madone SLR 9", peso: 7.2 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Pinarello Dogma F12", peso: 7.4 },
    { nome: "Colnago C64", peso: 7.5 },
    { nome: "Scott Foil Premium", peso: 7.1 },
    { nome: "Giant TCR Advanced SL", peso: 6.9 },
    { nome: "Wilier Zero SLR", peso: 6.8 },
    { nome: "Cervélo R5", peso: 7.2 }
];


let {nome, peso} = biciDaCorsa[0]

for (let i = 1 ; i < biciDaCorsa.length ; i++){
    if(biciDaCorsa[i].peso < peso){
        peso = biciDaCorsa[i].peso;
        nome = biciDaCorsa[i].nome;
    }

}

// biciDaCorsa.forEach( bicicletta => {
//     if(bicicletta.peso < peso){
//         peso = bicicletta.peso;
//         nome = bicicletta.nome;
//     }
// });

console.log(`la bici con il peso minore é ${nome} e il peso é ${peso} (kg)`);


// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [
    {nome : "juventus", puntifatti : 0 , fallisubiti : 0},
    {nome : "inter", puntifatti : 0 , fallisubiti : 0},
    {nome : "milan", puntifatti : 0 , fallisubiti : 0}
]

squadre.forEach(el =>{
    el.puntifatti = getRndInteger(1, 100)
    el.fallisubiti = getRndInteger(1, 40)
})

let arrNew = [];
for (let pippo of squadre){
    arrNew.push(
        {
            name : pippo.nome,
            puntifatti : pippo.puntifatti

        }
    )
}
console.log(arrNew)


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

