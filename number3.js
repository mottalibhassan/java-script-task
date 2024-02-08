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
// let arra = {name:"hafiz",roll: 898,foather:"hossain" }
// let arra =[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// let arra =[ 1 , 2 , -3 ] ;
// let arra =["1" , {num:2} , NaN ] ;
// let arra =['1' , 555 , NaN ];
// console.log(typeof arra);
console.log(deleteInvalids(arra));