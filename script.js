

//Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');

    if(href === '#') window.scrollTo({
        top:0,
        behavior:"smooth",
    });

    if(href !== "#" && href.startsWith('#')){

       
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({behavior:"smooth"});
    }

    if(link.classList.contains('main-nav-link'))
        headerEl.classList.toggle("nav.open");
    
    })
});

//Sitchy NavBar

const sectionHeroEl= document.querySelector(".section-hero");


const observer = new IntersectionObserver(function(entries){

    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
        document.body.classList.add('sticky');
    }

    if(ent.isIntersecting === true){
        document.body.classList.remove('sticky');
    }

}, {
    root: null, //Significa la scherma quindi la viewport
    //quindi ogni volta che sarà parti a 0 quindi l'inizio del .section-hero
    //si attiverà lo sticky
    threshold: 0,
    rootMargin:"-80px", 
})
observer.observe(sectionHeroEl);


//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})



//SetCurrent year
const yearEl = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearEl.textContent=currentYear;