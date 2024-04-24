
function greet(){
    console.log("Howdy!!!")
}

greet();

function greet2(username){
    console.log("Howdy " + username + "!!!")
}
greet2("class")
greet2("Kevin")

function greet3(username){
    return "Howdy" + username + "!!!";
}

result = greet3("Bob");
console.log(result)