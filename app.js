async function onSuccess(response) {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", ()=> {
        nav_bar = document.querySelector("header nav");
        nav_bar.classList.toggle("visible_nav");
        title_text_parent = document.getElementById("title-text");
        title_text_h1 = title_text_parent.children[0];
        title_text_h2 = title_text_parent.children[1];
        
        if (nav_bar.classList.contains("visible_nav")) {
            title_text_h1.classList.toggle("smallTitleH1");
            title_text_h2.classList.toggle("smallTitleH2");
            title_text_parent.style.lineHeight = "7vw";
        }
        else {
            title_text_h1.classList.toggle("smallTitleH1");
            title_text_h2.classList.toggle("smallTitleH2");
            title_text_parent.style.lineHeight = "10vw";
        }
    })

    function addBubble() {
        var bubbleSize = (Math.floor(Math.random() * 22) + 3); //Random number from 3-25 to use as the bubble size percent
        var bubble = document.createElement("img");
        bubble.src = "assets/bubble.png";
        bubble.alt = "A floating bubble";
        bubble.style.width = bubbleSize + '%';
        bubble.classList.add("bubbles");
        document.querySelector("header").appendChild(bubble);
    }

    addBubble(); //Need to loop through and continuously create and pop bubbles, and make them move around
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