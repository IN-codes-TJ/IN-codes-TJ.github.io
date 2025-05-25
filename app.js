async function onSuccess(response) {
    const hamb = document.getElementById("hamburger");
    nav_area = document.querySelector("header nav");
    nav_area.style.overflow = "hidden";
    hamb.addEventListener("click", ()=>{
        nav_area = document.querySelector("header nav");
        title = document.getElementById("title");

        console.log(nav_area.style.overflow);
        if (nav_area.style.overflow == "hidden") {
            nav_area.style.overflow = "visible";
            nav_area.style.width = '25%';
        }
        else {
            nav_area.style.overflow = "hidden";
            nav_area.style.width = '0%';
            console.log("hidden");
        }
    })
}

function onError(error) {
    console.log("Error: " + error);
}

window.addEventListener("load", ()=> {
    load_screen = document.getElementById("load_screen");
    console.log(load_screen);
    load_screen.style.overflow = "hidden";
    load_screen.style.height = 0;
    console.log("Content Loaded");
})

fetch('index.json').then(onSuccess, onError);