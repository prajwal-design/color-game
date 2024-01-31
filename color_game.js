//------------------------------------------------
//Helper functions
//------------------------------------------------

const pickColor = ()=>{
    //get ramdom number between 0 and 5
    const random = Math.floor(Math.random() * 6)
    return colors[random ]
}

const generateRandomColor=()=>{

    // pick r,g,b values between 0 and 255

    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256) 
    const b = Math.floor(Math.random()*256)
    
    return `rgb(${r}, ${g}, ${b})`
}

const generateRandomColors=(num)=>{
    //declare an array
    let output = [];
    for(let i=0;i<num;i++){
        output.push(generateRandomColor())
    }
    return output
}

const changeColors = (color)=>{
    squares.forEach((square)=>{
         square.style.backgroundColor = color;
    })
}

const reset = () =>{
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    resetButton.textContent="New Colors"
    colorDisplay.textContent = pickedColor
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.backgroundColor = "black"
        }
    }
    title.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
}


//------------------------------------------------
//init variables
//------------------------------------------------

//State
let numSquares = 6;

//select elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
const message = document.getElementById("message")
const title  = document.querySelector("h1")
const resetButton = document.getElementById("resetButton")
// const eassyButton = document.getElementById("eassyButton")
// const hardButton = document.getElementById("hardButton")
const modeButton = document.querySelectorAll(".mode")

let colors = generateRandomColors(numSquares)
let pickedColor= pickColor()

//update colorDisplay
colorDisplay.textContent = pickedColor;

//------------------------------------------------
//Main code
//------------------------------------------------

//Reset Color Button
resetButton.addEventListener("click",reset)

//Mode Buttons
modeButton.forEach((button)=>{
    button.addEventListener("click",function(){
        modeButton[0].classList.remove("selected")
        modeButton[1].classList.remove("selected")
        this.classList.add("selected")
        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else{
            numSquares = 6;
        }
        reset()
    })
})


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
            title.style.backgroundColor = pickedColor
            resetButton.textContent = "Play Again?"
        }else{
            this.style.backgroundColor = "black"
            message.textContent = "You suck"
        }
    })
} 

