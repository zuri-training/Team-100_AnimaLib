//alert("This is the JavaScript file");
// template animation object
const animationObj = [{
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
    },
];

async function getAnimations() {
    return animationObj;
}

function loadAnimationsOnSideBar() {
    let animeList = ``;

    getAnimations().then((animations) => {
        if (animations && animations.length) {
            animations.forEach((val) => {
                animeList += `<!-- items -->
                            <span class="menu_II_Item">
                                <a href="#" class="animeLink menuLink">${val.name}</a>
                            </span>`;
            });
        }

        $("#anime-menuList").html(animeList);
    });
}

function showAnimeDetails() {
    let detailsStr = ``;

    getAnimations().then((animations) => {
        if (animations && animations.length) {
            animations.forEach((val) => {
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
            });
        }

        // set the details on the page
        $("#anime-animationDetails").html(detailsStr);
    });
}

$(document).ready(() => {
    loadAnimationsOnSideBar();
    showAnimeDetails();
    // getAnimations().then(animations => {
    //     console.log(animations)
    // })
});
let navLists = document.getElementsByClassName("nav-list");
let login = document.getElementById("login");
let hideAfterLogin = document.getElementsByClassName("hide-after-login");
let showAfterLogin = document.getElementsByClassName("show-after-login");
let changeAfterLogin = document.getElementsByClassName("change-after-login");
let showAfterProfileClick = document.getElementById("show-after-profile-click");
let downArrow = document.getElementById("profile-click");
let downIcon = document.getElementsByClassName("drop-icon");
let faqToggles = document.getElementsByClassName("toggle");
let faqContent = document.getElementsByClassName("faq-answer");
let faqBody = document.getElementsByClassName("faq");
let profileImg = document.getElementById("profile-img-nav-bar");

// code for active state
Array.from(navLists).forEach((navList) => {
    navList.addEventListener("click", function() {
        Array.from(navLists).forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// code
// for authenticated header
login.addEventListener("click", function() {
    Array.from(hideAfterLogin).forEach(
        (element) => (element.style.display = "none")
    );
    Array.from(showAfterLogin).forEach(
        (element) => (element.style.display = "flex")
    );
    Array.from(changeAfterLogin).forEach(
        (element) => (element.innerHTML = "Read Documentation")
    );
});

// code for slider effect using owlcarousel
$(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    margin: 10,
    loop: true,
    dots: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        850: {
            items: 2.8,
        },
        1000: {
            items: 3.2,
        },
        1200: {
            items: 3.5,
        },
    },
});

// Code for FAQ Accordion
for (let i = 0; i < faqToggles.length; i++) {
    faqToggles[i].addEventListener("click", () => {
        if (parseInt(faqContent[i].style.height) != faqContent[i].scrollHeight) {
            faqContent[i].style.height = faqContent[i].scrollHeight + "px";
            downIcon[i].classList.remove("fa-angle-down");
            downIcon[i].classList.add("fa-angle-up");
        } else {
            faqContent[i].style.height = "0px";
            downIcon[i].classList.remove("fa-angle-up");
            downIcon[i].classList.add("fa-angle-down");
        }
        for (let j = 0; j < faqContent.length; j++) {
            if (j !== i) {
                faqContent[j].style.height = "0px";
                downIcon[j].classList.remove("fa-angle-up");
                downIcon[j].classList.add("fa-angle-down");
            }
        }
    });
}

window.addEventListener("mouseup", function(event) {
    for (let k = 0; k < faqBody.length; k++) {
        if (event.target != faqBody[k] && event.target.parentNode != faqBody[k]) {
            faqContent[k].style.height = "0px";
            downIcon[k].classList.remove("fa-angle-up");
            downIcon[k].classList.add("fa-angle-down");
        }
    }
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
});

const togglePassword = document.querySelector("#togglePassword");

const password = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
    const type =
        password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});