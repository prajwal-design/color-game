//constants declarations
const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)", 
]

//select elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
const message = document.getElementById("message")

//Helper functions
const pickColor = ()=>{
    //get ramdom number between 0 and 5
    const random = Math.floor(Math.random() * 6)
    return colors[random ]
}
//choose winning color
const pickedColor= pickColor()

//update colorDisplay
colorDisplay.textContent = pickedColor;

//setup squares
for(let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i]
    //add click listeners
    squares[i].addEventListener("click",function(){
        //get the color of clicked
        const clickedColor = this.style.backgroundColor;
        
        if(clickedColor===pickedColor){
            message.textContent = "Correct! :-D";
            changeColors(pickedColor)
        }else{
            this.style.backgroundColor = "black"
            message.textContent = "You suck"
        }
    })
} 

const changeColors = (color)=>{
    squares.forEach((square)=>{
         square.style.backgroundColor = color;
    })
}