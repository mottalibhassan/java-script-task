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

let info = {name: "kolimuddin" , birthYear: 199 , siteName: "google" };
console.log(password(info));