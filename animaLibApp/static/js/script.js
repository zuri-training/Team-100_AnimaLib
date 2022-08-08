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
    }
];

async function getAnimations() {
    return animationObj;
}

function loadAnimationsOnSideBar() {
    let animeList = ``;

    getAnimations().then(animations => {
        if (animations && animations.length) {
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

function showAnimeDetails() {
    let detailsStr = ``;

    getAnimations().then(animations => {
        if (animations && animations.length) {
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
    // getAnimations().then(animations => {
    //     console.log(animations)
    // })
})

let navLists = document.getElementsByClassName('nav-list')
let login = document.getElementById("login")
let hideAfterLogin = document.getElementsByClassName('hide-after-login')
let showAfterLogin = document.getElementsByClassName('show-after-login')
let changeAfterLogin = document.getElementsByClassName('change-after-login')
let showAfterProfileClick = document.getElementById('profile-dropdown')
let downArrow = document.getElementById('profile-click')
let downIcon = document.getElementsByClassName('drop-icon')
let faqToggles = document.getElementsByClassName('toggle')
let faqContent = document.getElementsByClassName('faq-answer')
let faqBody = document.getElementsByClassName('faq')
let profileImg = document.getElementById('profile-img-nav-bar')
let supportNav = document.getElementById('support')
let supportDropDown = document.getElementById('support-dropdown')
let searchInput = document.getElementById('search-input')
let sortBy = document.getElementById('sort-by')
let sortDropDown = document.getElementById('sort-dropdown')
let sortByNewText = document.getElementsByClassName('sort-link')
let sortByText = document.getElementById('sort-text')
let searchBar = document.getElementById('search-input')
let searchText = document.getElementById('filter')

// code for active state
Array.from(navLists).forEach(navList => {
    navList.addEventListener('click', function() {
        Array.from(navLists).forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

    });
});


// code for authenticated header
login.addEventListener('click', function() {
    Array.from(hideAfterLogin).forEach(element => element.style.display = 'none');
    Array.from(showAfterLogin).forEach(element => element.style.display = 'flex');
    Array.from(changeAfterLogin).forEach(element => element.innerHTML = 'Read Documentation');

});


// code for support page drop down
window.addEventListener('click', function(event) {
    if (supportDropDown.style.display == "none") {
        if (event.target == supportNav) {
            supportDropDown.style.display = "block";
            downArrow.classList.remove('fa-angle-down')
            downArrow.classList.add('fa-angle-up')
        }
    } else {
        if (event.target == supportNav) {
            supportDropDown.style.display = "none";
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
            Array.from(navLists)[2].classList.remove('active')
        } else if (event.target != supportNav && event.target != supportNav.parentNode != supportNav) {
            supportDropDown.style.display = "none";
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
            Array.from(navLists)[2].classList.remove('active')
        }
    }
})

// code for profile drop down
window.addEventListener('click', function(event) {
    if (showAfterProfileClick.style.display == "none") {
        if (event.target == downArrow || event.target == profileImg) {
            showAfterProfileClick.style.display = 'block';
            downArrow.classList.remove('fa-angle-down')
            downArrow.classList.add('fa-angle-up')
        }
    } else {
        if (event.target == downArrow || event.target == profileImg) {
            showAfterProfileClick.style.display = 'none';
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
        } else if (event.target != showAfterProfileClick && event.target.parentNode != showAfterProfileClick) {
            showAfterProfileClick.style.display = 'none';
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
        }
    }
})

// code for sort by drop down
window.addEventListener('click', function(event) {
    if (sortDropDown.style.display == "none") {
        if (event.target == sortBy || event.target == sortByText) {
            sortDropDown.style.display = "block";
            downArrow.classList.remove('fa-angle-down')
            downArrow.classList.add('fa-angle-up')
        }
    } else {
        if (event.target == sortBy || event.target == sortByText) {
            sortDropDown.style.display = "none";
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
        } else if (event.target != sortBy && event.target != sortBy.parentNode != sortBy) {
            sortDropDown.style.display = "none";
            downArrow.classList.remove('fa-angle-up')
            downArrow.classList.add('fa-angle-down')
        }
    }
})


// code for sort by change
Array.from(sortByNewText).forEach(NewSort => {
    NewSort.addEventListener('click', function() {
        sortByText.innerHTML = NewSort.innerHTML
    });
});

// code for search result display
searchBar.addEventListener('keyup', function() {
    var filter = searchBar.value
    searchText.innerHTML = filter
});

// code for slider effect using owlcarousel
$('.owl-carousel').owlCarousel({
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
            items: 1
        },
        830: {
            items: 2
        },
        1000: {
            items: 2.5
        },
        1200: {
            items: 2.8
        },
        1400: {
            items: 3.3
        }
    }
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


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle("show");
        icon.classList.toggle("rotate");
    });
});