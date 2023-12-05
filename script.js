

let calculatorDisplay = ""
let currentLocation = 0

function updateCurrentOperations(textToAdd){
    // calculatorDisplay += textToAdd
    let calculatorDisplayArray = calculatorDisplay.split('');
    calculatorDisplayArray.splice(currentLocation, 0, textToAdd);
    calculatorDisplay = calculatorDisplayArray.join('');
    displayCurrentOperations(calculatorDisplay)
    moveCurrentLocation('right');
}

function displayCurrentOperations(calculatorDisplay){
    screenDisplay.textContent = calculatorDisplay

    if (calculatorDisplay == "") {
        screenDisplay.textContent = "0";
    }
}

function calculateCurrentOperations(){
    try{

        if (eval(calculatorDisplay) == 80085){
            screenDisplay.textContent = "80085 = Nice"
            const layeredBoom = new Audio('./Audio/Vine-Boom.mp3')
            layeredBoom.play()
            showImageRandomLocation()
        } else {
            screenDisplay.textContent = calculatorDisplay + " = " + eval(calculatorDisplay)
        }
        


    }
    catch{
        screenDisplay.textContent = "There was an error"
    }
    
}

function clearCurrentOperations(){
    calculatorDisplay = ""
    displayCurrentOperations(calculatorDisplay)
    moveCurrentLocation('reset')

    while (bgImageContainer.hasChildNodes()){
        bgImageContainer.removeChild(bgImageContainer.firstChild)
    }
}

function deleteCurrentLocation(){
    // calculatorDisplay = calculatorDisplay.substring(0, calculatorDisplay.length-1)
    let calculatorDisplayArray = calculatorDisplay.split('');
    calculatorDisplayArray.splice(currentLocation-1, 1, '');
    calculatorDisplay = calculatorDisplayArray.join('');
    displayCurrentOperations(calculatorDisplay)
    moveCurrentLocation('left')
}

function moveCurrentLocation(direction){
    // inputLine.style.marginLeft = '24px';
    if (direction == 'left'){
        currentLocation -= 1
    } else if(direction == 'right'){
        currentLocation += 1
    } else if(direction == 'reset'){
        currentLocation = 0
    }


    if (currentLocation < 0){
        currentLocation = 0;
    }

    if (currentLocation > calculatorDisplay.length){
        currentLocation = calculatorDisplay.length;
    }


    let currentLocationPx = String((currentLocation * 16.5) - 8) + 'px'
    inputLine.style.marginLeft = currentLocationPx;
}

function buttonClicked(button){
    let buttonText = button.innerHTML
    
    switch (buttonText) {
        case '&lt;-':
            moveCurrentLocation('left');
            break;
        case '-&gt;':
            moveCurrentLocation('right');
            break;
        case '=':
            calculateCurrentOperations();
            break;
        case 'C':
            clearCurrentOperations()
            break;
        case 'Bs':
            deleteCurrentLocation()
            break;
        default:
            updateCurrentOperations(buttonText)
    }
}

function showImageRandomLocation() {
    let img = document.createElement("img");

    let randNum = Math.random()

    if (randNum < 0.9){
        img.src = './Images/rock-eyebrow.jpg';
    } else {
        img.src = './Images/lucky-image.jpg';
    }
    

    // Set a random position within the viewport
    img.style.position = 'fixed'
    img.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    img.style.top = Math.floor(Math.random() * window.innerHeight) + "px";

    // Set a random size with a limit
    var randomSize = Math.floor(Math.random() * 200) + 50; // Adjust the limits as needed
    img.style.width = randomSize + "px";
    img.style.height = randomSize + "px";

    // Append the image to the container
    bgImageContainer.appendChild(img);
}










let buttons = document.getElementsByTagName("button")
let screenDisplay = document.querySelector('.Calculator-Display-Main')
let inputLine = document.querySelector('.Calculator-Display-Line')
let bgImageContainer = document.getElementById("image-container")

for (let i=0; i<buttons.length; i++){
    //Just writing the function calls it, but doesnt return it, in this case, you will have to define the function in the addeventlistener function
    buttons[i].addEventListener("click", function(){
        buttonClicked(buttons[i]);
    })
}





//Only works in Node.js

// const sqlite3 = require('sqlite3');

// const db = new sqlite3.Database('./db.sqlite');







