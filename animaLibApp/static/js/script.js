//alert("This is the JavaScript file");
// template animation object
const animationObj = [
    {
        id: 1,
        name: "Move Up",
        styleCode: "moveup",
        description: "You can make the text or button or whatever element you want to style move up with this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 2,
        name: "Move Down",
        styleCode: "movedown",
        description: "You can make the text or button or whatever element you want to style move up with this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 3,
        name: "Move Right",
        styleCode: "moveright",
        description: "You can make the text or button or whatever element you want to style move right with this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 4,
        name: "Move Left",
        styleCode: "moveleft",
        description: "You can make the text or button or whatever element you want to style move left with this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 5,
        name: "Blink",
        styleCode: "blink",
        description: "You can make the text or button or whatever element you want to style with the blink using this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 6,
        name: "Bounce",
        styleCode: "bounce",
        description: "You can make the text or button or whatever element you want to style with the bounce effect using this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 7,
        name: "Fade In",
        styleCode: "fadeIn",
        description: "You can make the text or button or whatever element you want to style with the Fade In effect, using this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 8,
        name: "Flip",
        styleCode: "flip",
        description: "You can make the text or button or whatever element you want to style with the flip effect using this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 9,
        name: "Swing",
        styleCode: "swing",
        description: "You can make the text or button or whatever element you want to style with the swing effect using animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    },
    {
        id: 10,
        name: "Tada",
        styleCode: "tada",
        description: "You can make the text or button or whatever element you want to style with the tada effect using this animation class",
        dateCreated: "10-10-2022 11:20:22",
        lastUpdated: "10-10-2022 11:20:22",
    }
];

async function getAnimations(){
    return animationObj;
}

function loadAnimationsOnSideBar(){
    let animeList = ``;

    getAnimations().then(animations => {
        if(animations && animations.length){
            animations.forEach(val => {
                animeList += `<!-- items -->
                            <span class="menu_II_Item">
                                <a href="#" class="animeLink menuLink">${val.name}</a>
                            </span>`;
            })
        }

        $("#anime-menuList").html(animeList)
    }) 
}

function showAnimeDetails(){
    let detailsStr = ``;

    getAnimations().then(animations => {
        if(animations && animations.length){
            animations.forEach(val => {
               detailsStr += `<!-- Animation content 1 -->
                            <div class="animeRow">
                                <!-- Animation content -->
                                <div class="animationContent">
                                    <h4>${val.name}</h4>
                                    <p>${val.description}</p>
                                </div>
                        
                                <!-- Display area -->
                                <div class="anime-displayarea">
                                    <div class="sliderContainer">
                                    <!-- main slide content -->
                                    <div class="slideMain">
                                        <!-- content for main slider here -->
                                    </div>
                                    <div class="slideMoving">
                                        <!-- slider handle -->
                                        <div class="sliderHandle">
                                        <!-- the handle icon -->
                                        <span>|</span>
                                        </div>
                        
                                        <!-- slider content -->
                                        <div class="slidingContent">
                                            <div class="slider_innerBox d-flex justify-content-center
                                             align-items-center">
                                                <div class="container">
                                                    <div class="${val.styleCode}
                                                     shadow-sm bg-danger text-white
                                                     p-2">${val.name}</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>`; 
            })
            
        }

        // set the details on the page
        $("#anime-animationDetails").html(detailsStr);
    })
}

$(document).ready(() => {
    loadAnimationsOnSideBar();
    showAnimeDetails();
    getAnimations().then(animations => {
        console.log(animations)
    })
})