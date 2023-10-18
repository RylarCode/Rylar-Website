

let calculatorDisplay = ""

function updateCurrentOperations(textToAdd, locationtoAdd){
    calculatorDisplay += textToAdd
    displayCurrentOperations(calculatorDisplay)
}

function displayCurrentOperations(calculatorDisplay){
    screenDisplay.textContent = calculatorDisplay
}

function calculateCurrentOperations(){
    try{
        screenDisplay.textContent = calculatorDisplay + " = " + eval(calculatorDisplay)
    }
    catch{
        screenDisplay.textContent = "There was an error"
    }
    
}

function clearCurrentOperations(){
    calculatorDisplay = ""
    displayCurrentOperations(calculatorDisplay)
}

function deleteCurrentLocation(){
    calculatorDisplay = calculatorDisplay.substring(0, calculatorDisplay.length-1)
    displayCurrentOperations(calculatorDisplay)
}

function buttonClicked(button){
    let buttonText = button.innerHTML
    
    switch (buttonText) {
        case '&lt;-':
            console.log('<-');
            break;
        case '-&gt;':
            console.log('->');
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
            updateCurrentOperations(buttonText,-1)
    }
}




let buttons = document.getElementsByTagName("button")
let screenDisplay = document.querySelector('.Calculator-Display-Main')

for (let i=0; i<buttons.length; i++){
    //Just writing the function calls it, but doesnt return it, in this case, you will have to define the function in the addeventlistener function
    buttons[i].addEventListener("click", function(){
        buttonClicked(buttons[i]);
    })
}