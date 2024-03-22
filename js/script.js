

let arrInvitati = [ 
    'Brad Pitt', 
    'Johnny Depp', 
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni',  
    'George Clooney', 
    'Amal Clooney', 
    'Fedez', 
    'Amadeus', 
    'Fiorello'
];

const listTipografy = arrInvitati.map((el , i)=>{
    const finaList = {
        tableName : 'tavolo vip',
        guestName : el,
        place : i
    }
    return finaList
})
console.log(listTipografy)
