import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


const section1 = document.querySelector('.main');
const section2 = document.querySelector('.portfolio');
const section3 = document.querySelector('.skills');
const section4 = document.querySelector('.contact');

const pagelinks = document.getElementsByClassName('pagelink');
var current_section = "#main";

const sections = [ section1, section2,section3,section4];
const scrollEvent = () => {


  for(let i = 0; i<sections.length;i++){
    const sectionTop = sections[i].getBoundingClientRect()['top'];
    if(Math.abs(sectionTop)<40){
      current_section = "#"+sections[i].className;
    }
  }

 for(let i=0;i<pagelinks.length;i++){
    pagelinks[i].className = 'pagelink';
    if(current_section === pagelinks[i].getAttribute("href")){
      pagelinks[i].className = 'pagelink active';
    }
  }

}

document.querySelector('.sections').addEventListener('scroll', scrollEvent);

/*=== hide/show skills==*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className
  console.log("click");

  for(let i=0;i<skillsContent.length;i++){
    skillsContent[i].className = 'skills_content inactive'
  }

  if(itemClass === 'skills_content inactive'){
    this.parentNode.className = 'skills_content active'
  }
}

skillsHeader.forEach((e)=>{
  e.addEventListener('click', toggleSkills);
})

/*highlight section*/


    

