const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');
const bodyel = document.querySelector('body');
const formEl = document.getElementById('contactForm');
const emailMsg = formEl.querySelector('small');
const emailForm = formEl.querySelector('input[type="email"]');
const userName = formEl.querySelector('input[name="user_name"');
const userLastName = formEl.querySelector('input[name="user_lastname"');
const message = formEl.querySelector('textarea');

const widths = [320, 768, 992, 1024, 1280, 1440, 1600, 1920];

function hasUpperCase(str) {
  const regExp = /[A-Z]/;
  return regExp.test(str);
}

formEl.addEventListener('submit', (e) => {
  console.log(e);
  if (hasUpperCase(emailForm.value)) {
    console.log(hasUpperCase(emailForm.value));
    e.preventDefault();
    emailMsg.style.display = 'block';
    emailMsg.textContent = 'Email needs to be lowercase';
  } else {
    emailMsg.style.display = 'none';
  }
});

const modalel = document.querySelector('.modal_window_container');

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
  name: 'Pokemon Web App API',
  description: 'A tool that involves the creation of a Webapp consuming an API and help Pokemon TC gamers to see the cards and the status of each one',
  feature_imageM: 'src/img/PokeWebAppJS/img_Placeholder.png',
  feature_imageD: 'src/img/PokeWebAppJS/img_Placeholder-Desktop.png',
  feature_imageWorkM: 'src/img/PokeWebAppJS/Snapshoot_Portfolio.png',
  feature_imageWorkD: 'src/img/PokeWebAppJS/Snapshoot_PortfolioD.png',
  technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  linkModal: '',
  linkLive: 'https://theluisabarca.github.io/CapstoneJS-API-Webapp/dist/',
  link2Source: 'https://github.com/TheLuisAbarca/CapstoneJS-API-Webapp',
};
const content02 = {
  name: 'ToDo List Web App',
  description: "'To-do list' is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.",
  feature_imageM: 'src/img/ToDo/img_Placeholder.png',
  feature_imageD: 'src/img/ToDo/img_Placeholder-Desktop.png',
  feature_imageWorkM: 'src/img/ToDo/Snapshoot_Portfolio.png',
  feature_imageWorkD: 'src/img/ToDo/Snapshoot_PortfolioD.png',
  technologies: ['CSS', 'HTML', 'Bootstrap', 'JavaScript'],
  linkModal: '',
  linkLive: 'https://theluisabarca.github.io/To-DO_List/dist/',
  link2Source: 'https://github.com/TheLuisAbarca/To-DO_List',
};
const content03 = {
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  feature_imageWorkM: 'src/img/Snapshoot_Portfolio.png',
  feature_imageWorkD: 'src/img/Snapshoot_PortfolioD.png',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: '',
};
const content04 = {
  name: 'Multi-Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  feature_imageM: 'src/img/img_Placeholder.png',
  feature_imageD: 'src/img/img_Placeholder-Desktop.png',
  feature_imageWorkM: 'src/img/Snapshoot_Portfolio.png',
  feature_imageWorkD: 'src/img/Snapshoot_PortfolioD.png',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
  linkModal: '',
  linkLive: '',
  link2Source: '',
};

const allcontent = [content01, content02, content03, content04];

function htmlWorksTemplate(index) {
  return ` \
  <img class="image-work hidden-mobile thumbnail" src='${index.feature_imageD}' alt="Image Placeholder"/> \
  <img class="image-work shown-mobile elipse19" src='${index.feature_imageM}' alt="Image Placeholder"/> \
  <article> \
    <div class="title-work">${index.name}</div> \
    <div class="content-work">${index.description}</div> \
    <ul class="langFrame-work"> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">${index.technologies[0]}</h4> \
      </li> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">${index.technologies[1]}</h4> \
      </li> \
      <li class="lang-box separator-lang"> \
        <h4 class="language-text">${index.technologies[2]}</h4> \
      </li> \
      <li class="lang-box"> \
        <h4 class="language-text">${index.technologies[3]}</h4> \
      </li> \
    </ul> \
    <br /> \
    <br />  \
    <button class="projectButton-work pButtonW-text modalButton" type="button">See Project</button> \
  </article>`;
}

function htmlModalTemplate(index) {
  return `\
  <article class="articlePost-container"> \
    <div class="title-Modalwork"> \
      <h4>${index.name}</h4> \
      <a><i class="fas fa-times fa-inverse closeIconModal"></i></a> \
    </div> \
    <img class="image-Modalwork hidden-mobile thumbnail" src='${index.feature_imageWorkD}' alt="Image Placeholder"/> \
    <img class="image-Modalwork shown-mobile" src='${index.feature_imageWorkM}' alt="Image Placeholder"/> \
    <p class="content-Modalwork">${index.description}</p> \
    <ul class="langFrame-Modalwork"> \
      <li><img src="src/img/divider.png" alt="divider"></li> \
      <li class="lang-box"> \
        <h4 class="language-text modal-text">${index.technologies[0]}</h4> \
      </li> \
      <li><img src="src/img/divider.png" alt="divider"></li> \
      <li class="lang-box"> \
        <h4 class="language-text modal-text">${index.technologies[1]}</h4> \
      </li> \
      <li><img src="src/img/divider.png" alt="divider"></li> \
      <li class="lang-box"> \
        <h4 class="language-text modal-text">${index.technologies[2]}</h4> \
      </li> \
      <li><img src="src/img/divider.png" alt="divider"></li> \
      <li class="lang-box"> \
        <h4 class="language-text modal-text">${index.technologies[3]}</h4> \
      </li> \
      <li><img src="src/img/divider.png" alt="divider"></li> \
    </ul> \
    <br /> \
    <br /> \
    <div class="buttonContainer"> \
      <button class="projectButton-work pButtonW-text"><a href="${index.linkLive}">See Live</a> \
      <i class="fas fa-arrow-right"></i></button> \
      <button class="projectButton-work pButtonW-text"><a href="${index.link2Source}">See Source</a> \
      <i class="fab fa-github"></i></button> \
    </div> \
  </article>`;
}

const person = {
  name: '',
  email: '',
  message: '',
};

if (window.innerWidth >= widths[2]) {
  person.lastName = '';
}

document.addEventListener('DOMContentLoaded', () => {
  modalel.style.display = 'none';
  modalel.style.position = 'unset';

  person.name = JSON.parse(localStorage.getItem('name'));
  if (window.innerWidth >= widths[2]) {
    person.lastName = JSON.parse(localStorage.getItem('lastName'));
  }
  person.email = JSON.parse(localStorage.getItem('email'));
  person.message = JSON.parse(localStorage.getItem('message'));

  Object.keys(person).forEach((key) => {
    if (key === 'name' && person[key] !== '') {
      userName.value = person[key];
    }
    if (window.innerWidth >= widths[2]) {
      if (key === 'lastName' && person[key] !== '') {
        userLastName.value = person[key];
      }
    }
    if (key === 'email' && person[key] !== '') {
      emailForm.value = person[key];
    }
    if (key === 'message' && person[key] !== '') {
      message.value = person[key];
    }
  });

  allcontent.forEach((element, index) => {
    const currIndex = Number(index + 1);
    const dinContent = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    if (currIndex % 2 !== 0) {
      newDiv.className = 'workCard-container normalCard-flow';
    } else {
      newDiv.className = 'workCard-container reverseCard-flow';
    }
    newDiv.innerHTML = htmlWorksTemplate(element);
    dinContent.appendChild(newDiv);
    document.getElementById('work-container').appendChild(dinContent);
  });

  const openModal = document.querySelectorAll('.modalButton');

  openModal.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      modalel.style.display = 'flex';
      modalel.style.position = 'fixed';
      bodyel.style.overflow = 'hidden';
      modalel.classList.add('animationModal');
      const modalContent = document.createDocumentFragment();
      const newCont = document.createElement('div');
      newCont.className = 'square-container';
      newCont.innerHTML = htmlModalTemplate(allcontent[i]);
      modalContent.appendChild(newCont);
      document.querySelector('.modal_window_container').appendChild(modalContent);

      const iconModal = document.querySelector('.closeIconModal');
      iconModal.addEventListener('click', () => {
        modalel.style.display = 'none';
        bodyel.style.overflow = 'auto';
        document.querySelector('.modal_window_container').removeChild(document.querySelector('.square-container'));
      });
    });
  });

  // Saving User Data Into Local Storage
  userName.addEventListener('input', () => {
    person.name = userName.value;
    localStorage.setItem('name', JSON.stringify(person.name));
  });

  emailForm.addEventListener('input', () => {
    person.email = emailForm.value;
    localStorage.setItem('email', JSON.stringify(person.email));
  });

  if (window.innerWidth >= widths[2]) {
    userLastName.addEventListener('input', () => {
      person.lastName = userLastName.value;
      localStorage.setItem('lastName', JSON.stringify(person.lastName));
    });
  }

  message.addEventListener('input', () => {
    person.message = message.value;
    localStorage.setItem('message', JSON.stringify(person.message));
  });
});
