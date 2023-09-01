const menu = document.querySelector(".menu");
const close_menu = document.querySelector(".close-menu");
let interval;
let height = 0;

menu.addEventListener('click', () => {
    const navbar_right = document.querySelector(".navbar-right");
    const navbar_left = document.querySelector(".navbar-left");

    if(navbar_right.classList.contains("navbar-active-right")){
        navbar_right.classList.remove("navbar-active-right");
        interval = setInterval(() => {
            height += 10;
            navbar_left.style.height = height + "vh";
            if(height === 100){
                clearInterval(interval);
            }
        }, 20);
    };
});

close_menu.addEventListener('click', () => {
    const navbar_right = document.querySelector(".navbar-right");
    const navbar_left = document.querySelector(".navbar-left");

    if(!navbar_right.classList.contains("navbar-active-right")){
        navbar_right.classList.add("navbar-active-right");

        interval = setInterval(() => {
            height -= 10;
            navbar_left.style.height = height + "vh";
            if(height === 0){
                clearInterval(interval);
            }
        }, 20);
    };
});

let timeOut;
const features = document.querySelector(".features");
const features_dropdown = document.querySelector(".features-dropdown");

const company = document.querySelector(".company");
const company_dropdown = document.querySelector(".company-dropdown");

// Features dropdwon Event Listners.
features.addEventListener("mouseenter", () => {
    features_dropdown.style.display = "block";
    company_dropdown.style.display = "none";
    clearTimeout(timeOut);
});
features.addEventListener("mouseleave", () => {
    timeOut = setTimeout(() => {
        features_dropdown.style.display = "none";
    }, 1200);
});
features_dropdown.addEventListener("mouseenter", () => {
    features_dropdown.style.display = "block";
    clearTimeout(timeOut);
});
features_dropdown.addEventListener("mouseleave", () => {
    features_dropdown.style.display = "none";
});

// Company dropdwon Event Listners.
company.addEventListener("mouseenter", () => {
    company_dropdown.style.display = "block";
    features_dropdown.style.display = "none";
    clearTimeout(timeOut);
});
company.addEventListener("mouseleave", () => {
    timeOut = setTimeout(() => {
        company_dropdown.style.display = "none";
    }, 1200);
});
company_dropdown.addEventListener("mouseenter", () => {
    company_dropdown.style.display = "block";
    clearTimeout(timeOut);
});
company_dropdown.addEventListener("mouseleave", () => {
    company_dropdown.style.display = "none";
});