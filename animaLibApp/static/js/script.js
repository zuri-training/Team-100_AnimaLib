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

// code for authenticated header
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

// code for profile icon click
downArrow.onmousedown = function() {
    if (showAfterProfileClick.style.display == "none") {
        showAfterProfileClick.style.display = "block";
        downArrow.classList.remove("fa-angle-down");
        downArrow.classList.add("fa-angle-up");
    } else {
        showAfterProfileClick.style.display = "none";
        downArrow.classList.remove("fa-angle-up");
        downArrow.classList.add("fa-angle-down");
    }
};

profileImg.onmouseover = function() {
    if (showAfterProfileClick.style.display == "none") {
        showAfterProfileClick.style.display = "block";
        downArrow.classList.remove("fa-angle-down");
        downArrow.classList.add("fa-angle-up");
    }
    // else {
    //     showAfterProfileClick.style.display = 'none';
    //     downArrow.classList.remove('fa-angle-up')
    //     downArrow.classList.add('fa-angle-down')
    // };
};

window.addEventListener("mousedown", function(event) {
    if (
        event.target != showAfterProfileClick &&
        event.target.parentNode != showAfterProfileClick
    ) {
        showAfterProfileClick.style.display = "none";
        downArrow.classList.remove("fa-angle-up");
        downArrow.classList.add("fa-angle-down");
    }
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