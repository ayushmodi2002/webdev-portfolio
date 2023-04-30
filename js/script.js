const togglebtn=document.getElementsByClassName('togglebtn')[0]
const navmenu=document.getElementsByClassName('navbar')[0]
const navbar=document.querySelector('.navbar')
const section_hero=document.querySelector('.herosection')
const portfolio_section=document.querySelector('.portfolio-section')
const observer=new IntersectionObserver((entries) => { 
    const ent = entries[0];
    ent.isIntersecting == false 
    ? navbar.classList.add('navbackground')
    : navbar.classList.remove('navbackground');
},{
    root:null,
    rootMargin:"",
    threshold:"",
});

observer.observe(section_hero);
observer.observe(portfolio_section);
