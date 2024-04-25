//dress - inputs? mood/feeling, weather/temp, output: color, layers, material
//inputs
mood = "bad" // or "bad"
weather = "bad"
destination = "work" //bank gym

//output with defaults
color = "black"
layers = 1
material = "cotton"

if (mood == "good"){
    //keep black
}else{
    color = "blue or pink" // bright colors?
}

 if(weather == "bad" || destination == "work"){
    layers++ //increase by 1
 }

 if (weather == "good" || mood == "good"){
    material = "silk" // something light
 }

 if (destination == "work" || weather == "bad"){
    material = "knit"
    layers++
 }

 console.log(color, layers, material)

//gas