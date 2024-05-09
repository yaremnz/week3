/* excercises  IfScripts pay_rules.js*/
//INPUTS
let payRate = 17.3
let hoursWorked = 45

//OUTPUT
let reason = "";
let grossPay = payRate * hoursWorked; //DEFAULT

//CONSTANTS
const LIMIT = 40;
const overtimeMultiplier = 1.5; 

//EVALUATE EXPRESSIONS
const isOver = hoursWorked > LIMIT
const isUnder = hoursWorked < LIMIT

// MAKE A DECISION
if(hoursWorked > LIMIT){
    reason = "IS OVER LIMIT"
    const overtimeHours = hoursWorked - LIMIT;
    const basePay = LIMIT * payRate;
    const bonusRate = overtimeMultiplier * payRate; 
    const extraPay = overtimeHours * bonusRate;
    //REPLACE DEFAULT 
    grossPay = basePay + extraPay;
}else if(hoursWorked < LIMIT){ //UNDER 
    reason = "IS UNDER LIMIT"

}else{//EXACT
    reason = "IS EXACTLY AT LIMIT"
}
//FINAL OUTPUT
console.log("GROSS PAY:", grossPay, "REASON:", reason, LIMIT);