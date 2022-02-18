const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const date = document.getElementById("date");
const load = document.getElementById("pre-loader");

const progressBar = document.querySelector(".page-progress");// declare variable for progress-bar
const topLink = document.querySelector(".top-link");
//create function for progress of progress-bar
const setProgress = () => {
    //call max scroll-Height
    const scrollHeight = document.body.scrollHeight; //get the scroll-height when user using the web.
    const viewportHeight = window.innerHeight; //height of the content we can see
    const maxScrollHeight = scrollHeight - viewportHeight;
    const scrollPage = window.pageYOffset;

    const percentage = (window.scrollY / maxScrollHeight) * 100;//calcultate the percentage of the scrollHeight
    progressBar.style.width = `${percentage}%`;
    if(scrollPage > 500){
        topLink.classList.add("move-top");
    }else {
        topLink.classList.remove("move-top");
    }
};
window.addEventListener("scroll", () => {
    setProgress(); //callback to upper function
});


window.addEventListener("load", function() {
    load.style.display = "none"; //after loading the entire page, remove the pre-loader display
});

navToggle.addEventListener("click", function() { //nav-bar toggle function
    links.classList.toggle("show-links");
});
const contentSec = document.querySelector(".content-sec");
const about = document.getElementById("about-sty");
const showBox = document.getElementById("detail");
about.addEventListener("click", () => {
    contentSec.style.display = "none";          //stupid coding of about section
    showBox.style.display = "inline-block";
    showBox.style.width = "100%"
})

date.innerHTML = new Date().getFullYear(); //to get the current year of footer section