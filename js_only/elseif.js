input = "now is the time"

if(input.lenght < 5){
    output = "short"
}else if (input.length < 15){
    output = "medium"
}else if (input.length <30){
    output = "long"
}else if(input.length < 80){
    output = "very long"
}else{
    output = "WTF"
}


console.log(output)