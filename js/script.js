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

// const listTipografy = arrInvitati.map((el , i)=>{
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

let firstBike = [0];

for (let i = 1 ; i < biciDaCorsa.length ; i++){
    if(biciDaCorsa[i].peso < firstBike.peso){
        
    }

}