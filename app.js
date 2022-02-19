const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {  //auto slide the image
    counter += 1;
    slidefun(counter);
}
function plusSlides(n) { //slide to next image when user clicking to next or prev buttons.
    counter += n;
    slidefun(counter); //callback function
    resetTimer(); //remove current slide
}
function currentSlide(n) { //instantly show the respective image
    counter = n;
    slidefun(counter); //callback function
    resetTimer();
}
function resetTimer() { //function to remove current slide
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(n) {
    let i;
    for(i = 0; i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i = 0; i<dot.length; i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display ="block";
    dot[counter - 1].classList.add('active');
}