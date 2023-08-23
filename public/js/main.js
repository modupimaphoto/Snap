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
})