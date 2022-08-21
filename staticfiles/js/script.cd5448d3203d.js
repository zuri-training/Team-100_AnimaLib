//alert("This is the JavaScript file");
// template animation object
let a = 10;
let b = 10;
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
                            <div class="animeRow" style="
                            display: flex;
                            flex-direction: column;">
                                <!-- Animation content -->
                                <div class="animationContent">
                                    <h4>${val.name}</h4>
                                    <p>${val.description}</p>
                                </div>

                                <!-- Display area -->
                                <div class="anime-displayarea" style="margin: 0px 0px; margin-top: 16px; width: 792px;">
                                    <div class="sliderContainer" style="margin-left: 0px;" >
                                        <div class="slideMain" id="slideMain${val.id}" style="display:none">
                                        <!-- content for main slider here -->
                                        </div>

                                        <div class="slideMoving" id="slide${val.id}">
                                            <!-- slider handle -->
                                            <div class="sliderHandle" onclick="showMainContent(${val.id})">
                                                <!-- the handle icon -->
                                                <span>|</span>
                                            </div>

                                            <!-- slider content -->
                                            <div class="slidingContent">
                                                <div class="${val.styleCode} slider_innerBox d-flex justify-content-center
                                                    align-items-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                class="customise d-flex justify-content-between"
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                  align-items: center;
                                "
                              >
                                <span class="d-flex justify-content-end">
                                  <button class="customise-button">
                                    <span class="download-text">Customise animation</span>
                                  </button>
                                </span>

                                <div class="customise-icon">
                                  <img
                                    src="https://res.cloudinary.com/ddrdcj3lb/image/upload/v1660273140/thumbs_up_icon_wfjv7f.jpg"
                                    width="32px"
                                    alt=""
                                    style="margin-right: 32px;"
                                  />
                                  <img
                                    src="https://res.cloudinary.com/ddrdcj3lb/image/upload/v1660273141/Thumbs_down_icon_mzpdco.jpg"
                                    width="32px"
                                    alt=""
                                  />
                                </div>
                              </div>

                            </div>`;
            });
        }

        // set the details on the page
        $("#anime-animationDetails").html(detailsStr);
    });
}

function showMainContent(sliderId) {
    // Get the selected slider
    const selectedSlider = $(`#slider${sliderId}`);

    const selectedMain = $(`#slideMain${sliderId}`);

    // add the main content to the slider container
    const mainContent = ` <!-- main slide content -->
                    <div class="slideMain">
                        <!-- content for main slider here -->
                    </div>`;
    selectedSlider.after(mainContent);
    selectedMain.slideToggle("slow");
    console.log("I was clicked");
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
let showAfterProfileClick = document.getElementById("profile-dropdown");
let downArrow = document.getElementById("profile-click");
let downIcon = document.getElementsByClassName("drop-icon");
let faqToggles = document.getElementsByClassName("toggle");
let faqContent = document.getElementsByClassName("faq-answer");
let faqBody = document.getElementsByClassName("faq");
let profileImg = document.getElementById("profile-img-nav-bar");
let supportNav = document.getElementById("support");
let supportDropDown = document.getElementById("support-dropdown");
let searchInput = document.getElementById("search-input");
let sortBy = document.getElementById("sort-by");
let sortDropDown = document.getElementById("sort-dropdown");
let sortByNewText = document.getElementsByClassName("sort-link");
let sortByText = document.getElementById("sort-text");
let searchBar = document.getElementById("search-input");
let searchText = document.getElementById("filter");
let toggleIcon = document.getElementById("toggle");
let navPop = document.getElementById("nav-mobile-popup");
let profileClickMobile = document.getElementById("profile-click-mobile");
let profileDropDownMobile = document.getElementById("user-profile-links");
let animationFoundContainer = document.getElementById(
    "animation-found-container"
);
let animationNotFoundContainer = document.getElementById("animation-not-found");
let searchContainer = document.getElementById("search-container");
let reviewsCard = document.getElementsByClassName("review-card");

// // code for active state
// Array.from(navLists).forEach(navList => {
//     navList.addEventListener('click', function() {
//         Array.from(navLists).forEach(nav => nav.classList.remove('active'));
//         this.classList.add('active');

//     });
// });

// code for authenticated header
// login.addEventListener("click", function() {
//     Array.from(hideAfterLogin).forEach(
//         (element) => (element.style.display = "none")
//     );
//     Array.from(showAfterLogin).forEach(
//         (element) => (element.style.display = "flex")
//     );
//     Array.from(changeAfterLogin).forEach(
//         (element) => (element.innerHTML = "Read Documentation")
//     );
// });

// code for mobile and tablet navigation dropdown
window.addEventListener("click", function(event) {
    if (navPop.style.display == "none") {
        if (event.target == toggleIcon || event.target == toggleIcon.children[0]) {
            navPop.style.display = "block";
            navPop.style.height = "100vh";
            toggleIcon.children[0].classList.remove("fa-bars");
            toggleIcon.children[0].classList.add("fa-times");
        }
    } else {
        if (event.target == toggleIcon || event.target == toggleIcon.children[0]) {
            navPop.style.display = "none";
            toggleIcon.children[0].classList.add("fa-bars");
            toggleIcon.children[0].classList.remove("fa-times");
        }
    }
});

// code for profile links dropdown in mobile view
window.addEventListener("click", function(event) {
    if (profileDropDownMobile.style.display == "none") {
        if (event.target == profileClickMobile) {
            profileDropDownMobile.style.display = "block";
            profileClickMobile.style.transform = "rotateZ(180deg)";
        }
    } else {
        if (event.target == profileClickMobile) {
            profileDropDownMobile.style.display = "none";
            profileClickMobile.style.transform = "rotateZ(0deg)";
        } else if (event.target != profileClickMobile) {
            profileDropDownMobile.style.display = "none";
            profileClickMobile.style.transform = "rotateZ(0deg)";
        }
    }
});

// toggle mobile popup display when screen is greater than 950px
window.addEventListener("resize", function() {
    width = document.body.clientWidth;
    if (width > 950) {
        navPop.style.display = "none";
        toggleIcon.children[0].classList.remove("fa-times");
        toggleIcon.children[0].classList.add("fa-bars");
    }
});

// code for support page drop down
window.addEventListener("click", function(event) {
    if (supportDropDown.style.display == "none") {
        if (event.target == supportNav || event.target == supportNav.nextSibling) {
            supportNav.children[0].style.transform = "rotateZ(180deg)";
            supportDropDown.style.display = "block";
        }
    } else {
        if (event.target == supportNav || event.target == supportNav.nextSibling) {
            supportDropDown.style.display = "none";
            supportNav.children[0].style.transform = "rotateZ(0deg)";
            Array.from(navLists)[2].classList.remove("active");
        } else if (
            event.target != supportNav &&
            (event.target != supportNav.parentNode) != supportNav
        ) {
            supportDropDown.style.display = "none";
            supportNav.children[0].style.transform = "rotateZ(0deg)";
            Array.from(navLists)[2].classList.remove("active");
        }
    }
});

// code for profile drop down desktop
window.addEventListener("click", function(event) {
    if (showAfterProfileClick.style.display == "none") {
        if (event.target == downArrow || event.target == profileImg) {
            downArrow.style.transform = "rotateZ(180deg)";
            showAfterProfileClick.style.display = "block";
        }
    } else {
        if (event.target == downArrow || event.target == profileImg) {
            showAfterProfileClick.style.display = "none";
            downArrow.style.transform = "rotateZ(0deg)";
        } else if (
            event.target != showAfterProfileClick &&
            event.target.parentNode != showAfterProfileClick
        ) {
            showAfterProfileClick.style.display = "none";
            downArrow.style.transform = "rotateZ(0deg)";
        }
    }
});

// code for sort by drop down desktop
window.addEventListener("click", function(event) {
    if (sortDropDown.style.display == "none") {
        if (event.target == sortBy || event.target == sortByText) {
            sortDropDown.style.display = "block";
        }
    } else {
        if (event.target == sortBy || event.target == sortByText) {
            sortDropDown.style.display = "none";
        } else if (
            event.target != sortBy &&
            (event.target != sortBy.parentNode) != sortBy
        ) {
            sortDropDown.style.display = "none";
        }
    }
});

// code for sort by change
Array.from(sortByNewText).forEach((NewSort) => {
    NewSort.addEventListener("click", function() {
        sortByText.innerHTML = NewSort.innerHTML;
    });
});

// code for search result display
searchBar.addEventListener("keyup", function() {
    var filter = searchBar.value;
    var letters = /^[A-Za-z']+( [A-Za-z']+)*$/;
    if (!filter.match(letters)) {
        searchContainer.style.display = "none";
    } else {
        searchContainer.style.display = "block";
        searchText.innerHTML = filter;
        var capFilter = filter.toUpperCase();
        let results = ``;
        var count = 0;
        getAnimations().then((animations) => {
            animations.forEach((animation) => {
                if (animation.name.toUpperCase().indexOf(capFilter) > -1) {
                    count += 1;
                    results += `<!-- Result -->
                                <div class="anima-display-container">
                                    <div class="anima-display">
                                        <div class="animation ${animation.styleCode}"></div>
                                    </div>
                                    <div class="lower-container">
                                        <div>
                                            <p class="anima-name">${animation.name}</p>
                                        </div>
                                        <div>
                                        <img src="./image/like-icon.png" alt="" class="react-icon like">
                                        <img src="./image/dislike-icon.png" alt="" class="react-icon dislike">
                                        </div>
                                    </div>
                                </div>`;
                }
            });
            if (count > 0) {
                animationNotFoundContainer.style.display = "none";
                animationFoundContainer.style.display = "flex";
                $("#animation-found-container").html(results);
            } else {
                animationFoundContainer.style.display = "none";
                animationNotFoundContainer.style.display = "block";
            }
        });
    }
});

// code for slider effect using owlcarousel
$(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    margin: 0,
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
        830: {
            items: 2,
        },
        1000: {
            items: 2.5,
        },
        1200: {
            items: 2.8,
        },
        1400: {
            items: 3.3,
        },
    },
});

// code for drop shadow to header on scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});

// code for faq accordion
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
});

// code for reviews reduction in mobile view
window.addEventListener("resize", function() {
    width = document.body.clientWidth;
    if (width < 907) {
        for (var i = 0; i < reviewsCard.length; i++) {
            if (i >= 3) {
                reviewsCard[i].style.display = "none";
            }
        }
    } else {
        for (var i = 0; i < reviewsCard.length; i++) {
            reviewsCard[i].style.display = "block";
        }
    }
});