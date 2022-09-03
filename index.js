const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const faders = document.querySelectorAll('.fade-in')
const fadersSmall = document.querySelectorAll(".fade-insmall")


const navSlide = () => {
    
    
    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation)
            {
                link.style.animation=null;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        
        });
        //Burger Animation
        burger.classList.toggle('toggle');
        

    });
}

    const appearOptionsLarge = {
        threshold: 1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOptionsSmall = {
        threshold: 1,
        
    };
    
    const appearOnScroll = new IntersectionObserver
    (function(
        entries, 
        appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            })
        },
         appearOptionsLarge);

         const appearOnScrollSmall = new IntersectionObserver
         (function(
             entries, 
             appearOnScrollSmall
             ) {
                 entries.forEach(entry => {
                     if (!entry.isIntersecting) {
                         return;
                     } else {
                         entry.target.classList.add("appear");
                         appearOnScrollSmall.unobserve(entry.target);
                     }
                 })
             },
              appearOptionsSmall);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })

    fadersSmall.forEach(fadersSmall => {
        appearOnScrollSmall.observe(fadersSmall);
    })

 

    

navSlide();


