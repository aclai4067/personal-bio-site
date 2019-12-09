
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import $ from 'jquery';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import projectData from './helpers/data/projectData';

const bodyDivs = document.getElementsByClassName('fullPage');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let cardsToPrint = '';
  projectData.getProjects().then((projectArr) => {
    console.log(projectArr);
    projectArr.forEach((projectObj) => {
      if (projectObj.available) {
        cardsToPrint += `
          <div class="card col-sm-5 m-sm-4 m-1 p-0 projectCard ${projectObj.available}">
            <img class="card-img-top p-2" src=${projectObj.screenshot} alt="${projectObj.title} screenshot" />
            <div class="card-body">
                <h4 class="card-title"> ${projectObj.title} </h4>
                <p>${projectObj.description}</p>
                <p>${projectObj.technologiesUsed}</p>
            </div>
            <footer class="card-footer projectLinks">
                <a href=${projectObj.url}>URL</a>
                <a href=${projectObj.githubUrl}>GitHub Repo</a>
            </footer>
          </div>
        `;
      }
    });
    printToDom('projectsBody', cardsToPrint);
  }).catch((err) => console.error(err));
};

const toggle = (e) => {
  const selectedLink = $(e.target).attr('id');
  for (let i = 0; i < bodyDivs.length; i += 1) {
    if (selectedLink === bodyDivs[i].classList[1]) {
      bodyDivs[i].style.display = 'block';
    }
    if (selectedLink !== bodyDivs[i].classList[1]) {
      bodyDivs[i].style.display = 'none';
    }
  }
};

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  createProjectCards();
  $('body').on('click', '.navLinks', toggle);
};

init();
