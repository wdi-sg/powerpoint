var btnPrevs = document.querySelectorAll('.btn-prev');
var btnNexts = document.querySelectorAll('.btn-next');
var __current = 1, __prev;

function gotoSlide(n) {
    // Is there a next slide?
    var destinationSlide = document.querySelector('#s-' + n.toString());
    if (destinationSlide === null) return;

    // Hide the current slide, then display the destination slide
    var currentSlide = document.querySelector('#s-' + __current.toString());
    currentSlide.classList.toggle('hidden');

    var destinationSlide = document.querySelector('#s-' + n.toString());
    destinationSlide.classList.toggle('hidden');
    __prev = __current;
    __current = n;
    console.log(__prev, __current);
}

function nextSlide() {
    gotoSlide(__current + 1);
};

function prevSlide() {
    gotoSlide(__current - 1);
};

function init(n) {
    var startSlide = document.querySelector('#s-' + n.toString());
    startSlide.classList.toggle('hidden');
    __current = n;
};

btnPrevs.forEach(function(btn){
    btn.addEventListener('click', prevSlide);
});

btnNexts.forEach(function(btn){
    btn.addEventListener('click', nextSlide);
});

init(1);

document.querySelector('#btn-nuclear').addEventListener('click', function(event){
    document.querySelector('#nuclear-response').textContent = "You died. We died. Why'd you go and do that? :(";
})