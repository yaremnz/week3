let petCount = 2
let MAX_PETS = 3
let allowed = undefined
let cashOnHand = 3000
let DEPOSIT_AMOUNT = 1200  

let isWithinLimit = petCount <= MAX_PETS; //evaluate expression
let hasEnoughCash = cashOnHand >= DEPOSIT_AMOUNT

if(isWithinLimit && hasEnoughCash){ //evaluates less than or equal to
    //if ecpression above is true
    allowed = true;
}else{
    //if expression on 5 was false
    allowed = false;
}

console.log(allowed);