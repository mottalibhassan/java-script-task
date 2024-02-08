
function monthlySavings(arr , livingCost) {
    if( !(arra instanceof Array) ||  typeof livingCost !== "number"){
        return "invalid" ;
    }
    else{
        let totalEarn = 0;
    let vatTotal = 0;
    for (let earn of arr){
        if( earn >= 3000){
            let vatprimery = earn /100;
            let vat = vatprimery * 20;
            totalEarn += earn
            vatTotal += vat;
        }
        else{
            totalEarn += earn;
        }
    }
    let totalSpend = livingCost + vatTotal;
    let savings = totalEarn - totalSpend;
    if( totalSpend === totalEarn){
        return 0;
    }
    else if( totalSpend >= totalEarn){
        return "earn more";
    }
    else{
        return savings;
    }
    }
 }
let freelancer = monthlySavings(100, [ 900 , 2700 , 3400] );
// console.log(freelancer);