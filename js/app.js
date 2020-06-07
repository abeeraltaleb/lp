/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

 //Define Global Variables
const nav =document.getElementById('navbar__list');
const sections =document.querySelectorAll('Section');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
const navbuilder =() =>{
  let navUl='';
  sections.forEach(section =>{
const sectionID =section.id;
const sectionDataNav=section.dataset.nav;
navUl +='<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>'

});
nav.innerHTML=navUl;

}

navbuilder();



const offest =(section) => {
  return Math.floor(section.getBoundingClientRect.top);
};
//remove-active-class
const remobeActive =(section) =>{
  section.classList.remove('your-active-class');
};

//add-active-class
const addActive =(codeitional,section) =>{
  if(conditional){
  section.classList.add('your-active-class')
};
};


const sectionActicvstion =()=>{
  section.forEach(section =>{
    const elementoffset= offset(section);
    inviewport =() => elementoffset<150 &&elementoffset>=150;
    removeActive(section);
    addActive(isInViewport(),section)
  });
};


window.addEventListener('scoll,sectionActicvstion');

const scolling = () =>{
  const links = document.querySelectorAll('navbar__menu');
  links.forEach(link =>{
    link.addEventListener('click',() =>{
      for(i=0;i<sections;i++){
        sections[i].addEventListener("click",sectionScoll(link));
      }
    })
  })
};

scolling();
