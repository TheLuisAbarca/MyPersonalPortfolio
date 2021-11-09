const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');
const bodyel = document.querySelector('body');

btnBars.addEventListener('click', () => {
  mobMenu[0].style.display = 'flex';
  bodyel.style.overflow = 'hidden';
});

closeIcon[0].addEventListener('click', () => {
  mobMenu[0].style.display = 'none';
  bodyel.style.overflow = 'auto';
});

listEl.forEach((el) => {
  el.addEventListener('click', () => {
    mobMenu[0].style.display = 'none';
    bodyel.style.overflow = 'auto';
  });
});

const content01 = {
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  technologies: ['css','html','Bootstrap','Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: ''
};
const content02 = {
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  technologies: ['css','html','Bootstrap','Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: ''
};
const content03 = {  
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  technologies: ['css','html','Bootstrap','Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: ''
};
const content04 = {
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  technologies: ['css','html','Bootstrap','Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: ''
};

const allcontent = [content01, content02, content03, content04];

function htmlWorks_Template(index){
  return ' \
  <img class="image-work hidden-mobile thumbnail" src="'+index.feature_imageD+'" alt="Image Placeholder"/> \
  <img class="image-work shown-mobile elipse19" src="'+index.feature_imageM+'" alt="Image Placeholder"/> \
  <article> \
    <div class="title-work">'+index.name+'</div> \
    <div class="content-work">'+index.description+'</div> \
    <ul class="langFrame-work"> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">'+index.technologies[0]+'</h4> \
      </li> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">'+index.technologies[1]+'</h4> \
      </li> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">'+index.technologies[2]+'</h4> \
      </li> \
      <li class="lang-box"> \
        <h4 class="language-text">'+index.technologies[3]+'</h4> \
      </li> \
    </ul> \
    <br /> \
    <br />  \
    <button class="projectButton-work pButtonW-text" type="button">See Project</button> \
  </article>';  
}

document.addEventListener("DOMContentLoaded", function() {
  allcontent.forEach((element,index) => {
    let currIndex = Number(index+1);
    let dinContent = document.createDocumentFragment();
    var newDiv = document.createElement('div');
    if (currIndex % 2 !== 0){
      newDiv.className = 'workCard-container normalCard-flow';
    } else {
      newDiv.className = 'workCard-container reverseCard-flow';
    }
    newDiv.innerHTML = htmlWorks_Template(element);;
    dinContent.appendChild(newDiv);
    document.getElementById('work-container').appendChild(dinContent);
  });
});
