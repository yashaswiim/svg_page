var display = document.getElementById("textarea")
display.style.display="none"

var burger = document.getElementById("Burger")
var fries = document.getElementById("Fries")
var drink = document.getElementById("Drink")
var chicken = document.getElementById("Chicken")
var table = document.getElementById("Table")

var para = document.createElement("p")
display.appendChild(para)

var displayText = (string) => {
    display.style.display=""
    var text = ""
    switch (string){
        case "Burger":
            text="Mmmmm.... The burger is delicious!!!";
            break;

        case "Fries":
            text="I could eat fries the whole day and not get tired at all :D"
            break;
        
        case "Drink":
            text="Ooooo icy drink! I love how cooling this is :)"
            break;

        case "Chicken":
            text="Chicken drumsticks... my favorite part of the meal <3 "
            break;

        default:
            text=""
            display.style.display="none"
            break;
    }
    para.innerText=text
}

burger.addEventListener("click", ()=>{
    displayText("Burger")
})
fries.addEventListener("click", ()=>{
    displayText("Fries")
})
chicken.addEventListener("click", ()=>{
    displayText("Chicken")
})
drink.addEventListener("click", ()=>{
    displayText("Drink")
})
table.addEventListener("click", ()=>{
    displayText("")
})