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

function checkName(name) {
    if( typeof name !=="string"){
        return "invalid"
    }
    else{
        let namee = name.charAt(name.length - 1);
        let letter = ["A" , "y", "i" , "e" , "o" , "u" , "w"]
        for ( let wordSmall of letter){
            let lowercaseWord = wordSmall.toLowerCase()
            if ( namee === lowercaseWord){
            return "This is Good Name";
            }else{
            return "This not a Good Name";
            }
            break
        }
    }
}

function deleteInvalids(arra) {
    if(!(arra instanceof Array)){
        return "Please enter array type data"
    }
    else{
        let newArray = [];
        for ( let ar of arra){
            if (typeof ar === "number"){
                if (isNaN(ar)){
                    continue;
                }
                else{
                    newArray.push(ar);
                }
            }
        }
        return newArray;
    }
}

function password(info) {
    let year = info.birthYear;
    let str = year.toString() ;
    let len = str.length;
    if ( typeof info !== "object"){
        return "please give object type data and the data will provide username , birthyear , sitename"
    }
    else if ( !info.name || !info.birthYear || !info.siteName){
        return "Something missing";
    }
    else if (len <= 3){
        return "error" ;
    }
    else{
        let Name = info.siteName;
        let websiteName = Name.charAt(0).toUpperCase() + Name.slice(1);
        let userName = info.name ;
        let birthDate = info.birthYear;
        let passwordFinal = websiteName + "#" + userName + "@" + birthDate;
        return passwordFinal;
    }
}

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