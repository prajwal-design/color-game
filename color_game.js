
//Helper functions
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

colors = generateRandomColors(6)

//select elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
const message = document.getElementById("message")
const title  = document.querySelector("h1")

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
            title.style.backgroundColor = pickedColor
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