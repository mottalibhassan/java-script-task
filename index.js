// -------------------------------first Assinment JavaScript --------------------

// ------------------------- 1st assinment complete ------------------------------
function calculateMoney(ticketSale) {
    if(typeof ticketSale !=="number" || ticketSale < 0){
        return "Please enter the currect value"
    }else{
        let totalTicketSale = ticketSale * 120;
        const gardSalary = 500;
        const lunchConst = 50 * 8;
        let dailyCost = gardSalary + lunchConst;
        let perDayEarn = totalTicketSale - dailyCost;
        return perDayEarn;
    }
}

let earn = calculateMoney(5);
console.log(earn);


// ---------------------------------2nd Assinment -------------------------------------

// function checkName(name) {
//     if( typeof name !=="string"){
//         return "invalid"
//     }
//     else{
//         let namee = name.charAt(name.length - 1);
//         let letter = ["A" , "y", "i" , "e" , "o" , "u" , "w"]
//         for ( let wordSmall of letter){
//             let lowercaseWord = wordSmall.toLowerCase()
//             if ( namee === lowercaseWord){
//             return "This is Good Name";
//             }else{
//             return "This not a Good Name";
//             }
//             break
//         }
//     }
// }
// let name = checkName("hasib");
// console.log(name);

// -----------------------------------3rd assinment -----------------------------

// function deleteInvalids(array) {
//     if(typeof array !== "array"){
//         return "Please enter array type data"
//     }
//     else{
//         let newarray = [];
//         for ( let ar of array){
//             if (typeof ar === "number"){
//                 newarray.push(ar);
//             }
//         }
//         return newarray;
//     }
// }
// let arra =[40, 100, 1, 5, 25, 10] ;
// console.log(deleteInvalids(arra));
// console.log(typeof arra);