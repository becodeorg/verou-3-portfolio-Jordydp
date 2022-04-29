// //document.body.scrollIntoView(false);
// const trigger = document.querySelector('.trigger');
// const nav = document.querySelector('.full-screen-nav');
// const backdrop = document.querySelector('.backdrop');

// trigger.addEventListener('click', () => nav.classList.add('open-nav'));
// backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

//navigation system for Navbar
// In this code, first I am selecting all the links and sections.
// After that, I defined activeLink this variable will track the current active section or link.
// After that, I used forEach method to loop through all the links. Inside that I am access individual link and its index.
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

