$(document).ready(function(){
    $('.menu').on('click',function(){
        $('.nav-links').slideToggle();
        $('.download-link').slideToggle();
    });
});

$(document).ready(function() {
    $('.f-links li').click(function() {
        $('.f-links li').removeClass('active');
        $(this).addClass('active');
        var target = $(this).data('target');
        $('.section').hide();
        $('#' + target).show();
    });
});


//animations
let f_title = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('f-title-animate'); 
    }
});

f_title.observe(document.querySelector('.f-title'));

// container 2
let s_left = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('s-left-animate'); 
    }
}, {threshold: 0.8});

s_left.observe(document.querySelector('.s-left'));


let s_right = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
        entry.target.classList.add('second-right-animate')
    }
},{threshold:0.8});
s_right.observe(document.querySelector('.second-right'))

//container 3
let t_header = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('t-header-animate'); 
    }
}, {threshold: 0.8});

t_header.observe(document.querySelector('.t-header'));


let t_left = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('t-left-animate'); 
    }
}, {threshold: 0.8});

t_left.observe(document.querySelector('.t-left'));


let t_right = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('t-right-animate'); 
    }
}, {threshold: 0.8});

t_right.observe(document.querySelector('.t-right'));

//fourth container

let fourth_container = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('fourth-container-animate'); 
    }
}, {threshold: 0.8});

fourth_container.observe(document.querySelector('.fourth-container'));
