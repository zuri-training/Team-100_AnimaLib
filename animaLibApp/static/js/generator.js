
    // define constant elements in DOM 
    // Declare the element to be animated
    const animatedObject = document.getElementById("animatedobject"); 
    // Declare the container element for the code in order to toggle the display and hide effect 
    const hiddenCodeContainer = document.getElementById("html-code");
    // Declare the element where we want to display the code
    const hiddenCode=document.getElementById("hiddencode");
    // Declare the correct button for the click event of generating code
    const generateButton=document.querySelector(".generatebutton");

    // Declare the correct button classed moveup for the click event of generating animation
    const moveUpNavButton = document.querySelector(".moveupnav");
    // Declare the p tag holding the code we want to display in the div classed hidden code 
    const moveUpCode=document.querySelector("p.moveupcode");
    // Declear background color of button to initialize if loop that controls button toggle 
    moveUpNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

// Do the same declarations as described for move up for all the other animations
    const moveDownNavButton = document.querySelector(".movedownnav");
    const moveDownCode=document.querySelector("p.movedowncode");
    moveDownNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const moveRightNavButton = document.querySelector(".moverightnav");
    const moveRightCode=document.querySelector("p.moverightcode");
    moveRightNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const moveLeftNavButton = document.querySelector(".moveleftnav");
    const moveLeftCode=document.querySelector("p.moveleftcode");
    moveLeftNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const moveBlinkNavButton = document.querySelector(".blinknav");
    const blinkCode=document.querySelector("p.blinkcode");
    moveBlinkNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const bounceNavButton = document.querySelector(".bouncenav");
    const bounceCode=document.querySelector("p.bouncecode");
    bounceNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const fadeNavButton = document.querySelector(".fadenav");
    const fadeCode=document.querySelector("p.fadecode");
    fadeNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const flipNavButton = document.querySelector(".flipnav");
    const flipCode=document.querySelector("p.flipcode");
    flipNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const swingNavButton = document.querySelector(".swingnav");
    const swingCode=document.querySelector("p.swingcode");
    swingNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    const tadaNavButton = document.querySelector(".tadanav"); 
    const tadaCode=document.querySelector("p.tadacode");
    tadaNavButton.style.backgroundColor ="rgba(31, 39, 130, 0.05)";

    // definded this in order to do a console.log to verify the add and removal of appropriate class names.
    let animatedClass = animatedObject.className;
    
    // Get user input from HTML form
    let infiniteUpdate = document.querySelector('.infinite[type="checkbox"]:checked'); 
    let nameField = document.getElementById("namefield");
    let durationField = document.getElementById("durationfield");
    let delayField = document.getElementById("delayfield");
    // let iterationField = document.getElementById("delayfield");
    let iterationCountField = document.getElementById("iterationcountfield");
    let objectField = document.getElementById("objectfield");
  

    // Define click event for generatecode button to display
    generateButton.addEventListener('click', () => {
        if (hiddenCodeContainer.style.display === 'none') {
            hiddenCodeContainer.style.display = "block";
        } else {
            hiddenCodeContainer.style.display = 'none'
        }
      })

// Define the functions that will be called on the click event for each animation button
    function upColorToggle(){
        // This function sets the background color and text color of the moveup button 
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        if (moveUpNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
            moveUpNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
            moveUpNavButton.style.color = "white";
        } else{ 
            
        }
    }
    
    function upAnimateSample(){
        // This functions changes the class name, takes in the user input from the form and updates the animation 
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.add("moveup");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        // This section displays the basic css code for the default animation settings 
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = moveUpCode.innerHTML;
        // This part adds in the user's custom parameters below the basic css structure with the default input
        userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    }    
    // This part sets up the click event for the move up button using event listener 
    moveUpNavButton.addEventListener("click", () => {
        // This asseses the user's object choice and sets the border radius accordingly
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        upColorToggle();
        upAnimateSample();
    });  

// For Move down: Follows the same structure as commented in detail in the move up section
    function downColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        if (moveDownNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
            moveDownNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)", 
            moveDownNavButton.style.color = "white";
        } else{ 
           
        }
    }
    function downAnimateSample(){
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.toggle("movedown");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = moveDownCode.innerHTML;
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
       
    }   

// For Move down: Set on click event using Event listener  
    moveDownNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        downColorToggle();
        downAnimateSample();
    });


 // For Move right: Follows the same structure as commented in detail in the move up section
 function rightColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (moveRightNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveRightNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        moveRightNavButton.style.color = "white";
    } else{ 
       
    }
}
function rightAnimateSample(){
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        // use move left class here because theres a mistake on the css that mixes up left with right and I don't want to touch Mabels files since its working for her documentation page 
        animatedObject.classList.toggle("moveleft"); 
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = moveRightCode.innerHTML;
        userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    } 

// For Move right: Set on click event using Event listener 
    moveRightNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        rightColorToggle();
        rightAnimateSample();
    });



 // For Move left: Follows the same structure as commented in detail in the move up section
 function leftColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (moveLeftNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveLeftNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        moveLeftNavButton.style.color = "white";
    } else{ 
        
    }
}
function leftAnimateSample(){
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.toggle("moveright");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = moveLeftCode.innerHTML;
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    } 

// For Move Left: Set on click event using Event listener 
    moveLeftNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        leftColorToggle();
        leftAnimateSample();
    });



// For Blink: Follows the same structure as commented in detail in the move up section
 function blinkColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (moveBlinkNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveBlinkNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        moveBlinkNavButton.style.color = "white";
    } else{     
    }
}
function blinkAnimateSample(){
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.toggle("blink");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = blinkCode.innerHTML;
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
}  
// For blink: Set on click event using Event listener 
    moveBlinkNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        blinkColorToggle();
        blinkAnimateSample();
    });


// For Bounce: Follows the same structure as commented in detail in the move up section
 function bounceColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (bounceNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        bounceNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        bounceNavButton.style.color = "white";
    } else{ 
        
    }
}
function bounceAnimateSample(){
        animatedObject.className="";
        animatedObject.classList.add("result");
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.toggle("bounce");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = bounceCode.innerHTML;
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 
// For bounce: Set on click event using Event listener
    bounceNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        bounceColorToggle();
        bounceAnimateSample();
    });


// For Fade: Follows the same structure as commented in detail in the move up section
function fadeColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (fadeNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        fadeNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        fadeNavButton.style.color = "white";
    } else{ 
        
    }
}
function fadeAnimateSample(){
    animatedObject.className="";
    animatedObject.classList.add("result");
    hiddenCodeContainer.style.display = 'none';
    animatedObject.classList.toggle("fadeIn");
    animatedObject.style.animationDuration = durationField.value;
    animatedObject.style.animationDelay = delayField.value;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationCountField.value;
    }
    animatedObject.style.animationIterationCount = iterationAttribute;
    hiddenCode.innerHTML ="";
    hiddenCode.innerHTML = fadeCode.innerHTML;
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 
// For fade: Set on click event using Event listener
fadeNavButton.addEventListener("click", () => {
    if (objectField.value === 'ball') {
        animatedObject.style.borderRadius = "50%";
    } else if (objectField.value = 'box'){   
        animatedObject.style.borderRadius = "0px";
    }
    fadeColorToggle();
    fadeAnimateSample();
});

// For flip: Follows the same structure as commented in detail in the move up section
function flipColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (flipNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        flipNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        flipNavButton.style.color = "white";
    } else{ 
        
    }
}
function flipAnimateSample(){
    animatedObject.className="";
    animatedObject.classList.add("result");
    hiddenCodeContainer.style.display = 'none';
    animatedObject.classList.toggle("flip");
    animatedObject.style.animationDuration = durationField.value;
    animatedObject.style.animationDelay = delayField.value;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationCountField.value;
    }
    animatedObject.style.animationIterationCount = iterationAttribute;
    hiddenCode.innerHTML ="";
    hiddenCode.innerHTML = flipCode.innerHTML;
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
}

// For flip: Set on click event using Event listener
    flipNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        flipColorToggle();
        flipAnimateSample();
    });


// For swing: Follows the same structure as commented in detail in the move up section
function swingColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        tadaNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (swingNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        swingNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        swingNavButton.style.color = "white";
    } else{ 
        
    }
}
function swingAnimateSample(){
    animatedObject.className="";
    animatedObject.classList.add("result");
    hiddenCodeContainer.style.display = 'none';
    animatedObject.classList.toggle("swing");
    animatedObject.style.animationDuration = durationField.value;
    animatedObject.style.animationDelay = delayField.value;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationCountField.value;
    }
    animatedObject.style.animationIterationCount = iterationAttribute;
    hiddenCode.innerHTML ="";
    hiddenCode.innerHTML = swingCode.innerHTML;
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 

// For swing: Set on click event using Event listener
    swingNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        swingColorToggle();
        swingAnimateSample();
    });


// For tada: Follows the same structure as commented in detail in the move up sectionio
function tadaColorToggle(){
        moveUpNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveDownNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveRightNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveLeftNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveBlinkNavButton.style.color = "rgba(85, 85, 85, 1)";
        bounceNavButton.style.color = "rgba(85, 85, 85, 1)";
        fadeNavButton.style.color = "rgba(85, 85, 85, 1)";
        flipNavButton.style.color = "rgba(85, 85, 85, 1)";
        swingNavButton.style.color = "rgba(85, 85, 85, 1)";
        moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    if (tadaNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        tadaNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)",
        tadaNavButton.style.color = "white";
    } else{ 
        
    }
}
function tadaAnimateSample(){
    animatedObject.className="";
    animatedObject.classList.add("result");
    hiddenCodeContainer.style.display = 'none';
    animatedObject.classList.toggle("tada");
    animatedObject.style.animationDuration = durationField.value;
    animatedObject.style.animationDelay = delayField.value;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationCountField.value;
    }
    animatedObject.style.animationIterationCount = iterationAttribute;
    hiddenCode.innerHTML ="";
    hiddenCode.innerHTML = tadaCode.innerHTML;
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 

// For tada: Set on click event using Event listener
    tadaNavButton.addEventListener("click", () => {
        if (objectField.value === 'ball') {
            animatedObject.style.borderRadius = "50%";
        } else if (objectField.value = 'box'){   
            animatedObject.style.borderRadius = "0px";
        }
        tadaColorToggle();
        tadaAnimateSample();
    });

//    Use this to check the dynamically updated form values
    // console.log(infiniteUpdate.checked)
    // console.log(nameField.value)
    // console.log(objectField.value)
    // console.log(durationField.value)
    // console.log(delayField.value)
    // console.log(iterationCountField.value)
    // console.log(iterationAttribute)
    // console.log(hiddenCode.innerHTML)