let clickCount = 0;
const menuLinks = document.querySelectorAll('.link a');

document.querySelector('.menu').addEventListener('click', () => {
  clickCount++;
  if (clickCount % 2 !== 0) {
    menuLinks.forEach((link) => {
      link.style.display = 'block';
    });
  } else {
    menuLinks.forEach((link) => {
      link.style.display = 'none';
    });
  }
});



const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link,i) => {
    link.addEventListener('click' , () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            setTimeout(() =>{
                activeLink = i;
                sections[i].classList.add('active');
            },1000);
        }
    })
})

