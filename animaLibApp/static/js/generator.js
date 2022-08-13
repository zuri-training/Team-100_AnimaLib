
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
  

    // Define click event for generatecode button
    generateButton.addEventListener('click', () => {
        if (hiddenCodeContainer.style.display === 'none') {
            hiddenCodeContainer.style.display = "block";
        } else {
            hiddenCodeContainer.style.display = 'none'
        }
      })




   //   The toggle of the button color and the animation will be achieved using 2 functions for one click of the button
   // For Move up: Create functions to execute at the click of move up button
   // define the function for taking in user defined css attributes
   

    

    function upColorToggle(){
        if (moveUpNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
            moveUpNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
        } else{ 
            moveUpNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        }
    }
    function upAnimateSample(){
        hiddenCodeContainer.style.display = 'none';
        animatedObject.classList.toggle("moveup");
        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationCountField.value;
        }
        animatedObject.style.animationIterationCount = iterationAttribute;
        hiddenCode.innerHTML ="";
        hiddenCode.innerHTML = moveUpCode.innerHTML;
        userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    }    
    // For Move up: Set on click event using Event listener 
    moveUpNavButton.addEventListener("click", () => {
        upColorToggle();
        upAnimateSample();
    console.log(infiniteUpdate.checked)
    console.log(nameField.value)
    console.log(durationField.value)
    console.log(delayField.value)
    console.log(iterationCountField.value)
    console.log(iterationAttribute)
    console.log(hiddenCode.innerHTML)
    });  


// For Move down: Create functions to execute at the click of move down button
    function downColorToggle(){
        if (moveDownNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
            moveDownNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
        } else{ 
            moveDownNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
        }
    }
    function downAnimateSample(){
        hiddenCodeContainer.style.display = 'none';
        hiddenCode.innerHTML ="";
        animatedObject.classList.toggle("movedown");
        hiddenCode.innerHTML = moveDownCode.innerHTML;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationField.value;
        }
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;

        animatedObject.style.animationDuration = durationField.value;
        animatedObject.style.animationDelay = delayField.value;
        animatedObject.style.animationIterationCount = iterationAttribute;
    }  
// For Move down: Set on click event using Event listener  
    moveDownNavButton.addEventListener("click", () => {
        downColorToggle();
        downAnimateSample();
    });


 // For Move right: Create functions to execute at the click of move right button
 function rightColorToggle(){
    if (moveRightNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveRightNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        moveRightNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function rightAnimateSample(){
        hiddenCodeContainer.style.display = 'none';
        hiddenCode.innerHTML ="";
        animatedObject.classList.toggle("moveright");
        hiddenCode.innerHTML = moveRightCode.innerHTML;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationField.value;
        }
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    } 
// For Move right: Set on click event using Event listener 
    moveRightNavButton.addEventListener("click", () => {
        rightColorToggle();
        rightAnimateSample();
    });



 // For Move left: Create functions to execute at the click of move left button
 function leftColorToggle(){
    if (moveLeftNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveLeftNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        moveLeftNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function leftAnimateSample(){
        hiddenCodeContainer.style.display = 'none';
        hiddenCode.innerHTML ="";
        animatedObject.classList.toggle("moveleft");
        hiddenCode.innerHTML = moveLeftCode.innerHTML;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationField.value;
        }
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
    } 
// For Move Left: Set on click event using Event listener 
    moveLeftNavButton.addEventListener("click", () => {
        leftColorToggle();
        leftAnimateSample();
    });



// For Blink: Create functions to execute at the click of blink button
 function blinkColorToggle(){
    if (moveBlinkNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        moveBlinkNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        moveBlinkNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function blinkAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
        hiddenCode.innerHTML ="";
        animatedObject.classList.toggle("blink");
        hiddenCode.innerHTML = blinkCode.innerHTML;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationField.value;
        }
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
}    
// For blink: Set on click event using Event listener 
    moveBlinkNavButton.addEventListener("click", () => {
        blinkColorToggle();
        blinkAnimateSample();
    });


// For Bounce: Create functions to execute at the click of bounce button
 function bounceColorToggle(){
    if (bounceNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        bounceNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        bounceNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function bounceAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
        hiddenCode.innerHTML ="";
        animatedObject.classList.toggle("bounce");
        hiddenCode.innerHTML = bounceCode.innerHTML;
        if (infiniteUpdate.checked){
            iterationAttribute = "infinite";
        } else{
            iterationAttribute = iterationField.value;
        }
        let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
        hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 
// For bounce: Set on click event using Event listener
    bounceNavButton.addEventListener("click", () => {
        bounceColorToggle();
        bounceAnimateSample();
    });


// For Fade: Create functions to execute at the click of fade button
function fadeColorToggle(){
    if (fadeNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        fadeNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        fadeNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function fadeAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
    hiddenCode.innerHTML ="";
    animatedObject.classList.toggle("fadeIn");
    hiddenCode.innerHTML = fadeCode.innerHTML;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationField.value;
    }
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 
// For fade: Set on click event using Event listener
fadeNavButton.addEventListener("click", () => {
    fadeColorToggle();
    fadeAnimateSample();
});

// For flip: Create functions to execute at the click of flipbutton
function flipColorToggle(){
    if (flipNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        flipNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        flipNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function flipAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
    hiddenCode.innerHTML ="";
    animatedObject.classList.toggle("flip");
    hiddenCode.innerHTML = flipCode.innerHTML;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationField.value;
    }
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 
// For flip: Set on click event using Event listener
    flipNavButton.addEventListener("click", () => {
        flipColorToggle();
        flipAnimateSample();
    });


// For swing: Create functions to execute at the click of swing button
function swingColorToggle(){
    if (swingNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        swingNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        swingNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function swingAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
    hiddenCode.innerHTML ="";
    animatedObject.classList.toggle("swing");
    hiddenCode.innerHTML = swingCode.innerHTML;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationField.value;
    }
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;

    
    // use if loop such that if value ="" then value is infinite. check out document.getElementById("myDIV").style.animationIterationCount = "infinite";
} 

// For swing: Set on click event using Event listener
    swingNavButton.addEventListener("click", () => {
        swingColorToggle();
        swingAnimateSample();
    });


// For tada: Create functions to execute at the click of tada button
function tadaColorToggle(){
    if (tadaNavButton.style.backgroundColor === 'rgba(31, 39, 130, 0.05)') {
        tadaNavButton.style.backgroundColor = "rgba(79, 89, 213, 1)";
    } else{ 
        tadaNavButton.style.backgroundColor = 'rgba(31, 39, 130, 0.05)';
    }
}
function tadaAnimateSample(){
    hiddenCodeContainer.style.display = 'none';
    hiddenCode.innerHTML ="";
    animatedObject.classList.toggle("tada");
    hiddenCode.innerHTML = tadaCode.innerHTML;
    if (infiniteUpdate.checked){
        iterationAttribute = "infinite";
    } else{
        iterationAttribute = iterationField.value;
    }
    let userGeneratedCode = "You have achieved " + "'" + nameField.value + "'" + " by setting animation-duration:" + durationField.value+"s, your animation-delay is: " + delayField.value+"s, and your animation-iteration-count is:" + iterationAttribute
    hiddenCode.innerHTML = "\n" + swingCode.innerHTML + "\n" + "\n" + userGeneratedCode;
} 

// For tada: Set on click event using Event listener
    tadaNavButton.addEventListener("click", () => {
        tadaColorToggle();
        tadaAnimateSample();
    });

    // let myValue = document.querySelector('#infinite[type="checkbox"]:checked');
    // console.log(myValue)


//   const infiniteValue = document.querySelector('.ifinite[type="checkbox"]:checked');
//   console.log(document.querySelector('.infinite[type="checkbox"]:checked'))
  // document.getElementById("myNumber").defaultValue = "16";

//     var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;

// var e = document.getElementById("ddlViewBy");
// var value = e.value;
// var text = e.options[e.selectedIndex].text;

// checkedValue = document.querySelector('.messageCheckbox:checked').value;

// const test=document.getElementById("moveupcode");
// console.log(test);

// const test2=document.getElementById("hiddencode");
// console.log(test2);

// const generateButton=document.querySelector(".generatebutton");
// console.log(test3);

// infiniteValue = document.querySelector('.infinite:checked').value;
// console.log(infiniteValue)
// infiniteValue = document.querySelector('.infinite');
// console.log(infiniteValue)

// infiniteValue = document.querySelector('.input[type="checkbox"]:checked');
// console.log(infiniteValue)
// let x = animatedObject.className;

// / animatedObject.style.animationIterationCount =2;
        // animatedObject.offsetHeight;
        // animatedClass = "";
        // animatedClass = "result";
        // location.reload();
