
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import $ from 'jquery';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';

const bodyDivs = document.getElementsByClassName('fullPage');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const projects = [
  {
    title: 'Pardon Us Band Website',
    screenshot: '../assets/projectScreenshots/pardon-us-groupwork.jpg',
    description: 'This was a group project to create a website for the punk rock band, Pardon Us. I contributed the background image with parallox scrolling on all pages except home.  I also contributed the music page with a card printing function and animation to hide and display additional content.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-10/foundations-group-project-pardon-us',
  },
  {
    title: 'Cool Project 2',
    screenshot: 'https://live.staticflickr.com/1/17367_521ff9c374.jpg',
    description: 'This is the second best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project 3',
    screenshot: 'https://live.staticflickr.com/1/17367_521ff9c374.jpg',
    description: 'This is the third best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cool Project 4',
    screenshot: 'https://live.staticflickr.com/1/17367_521ff9c374.jpg',
    description: 'This is the fourth best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const createProjectCards = (projectArr) => {
  let cardsToPrint = '';
  projectArr.forEach((projectObj) => {
    if (projectObj.available) {
      cardsToPrint += `
        <div class="projectCard ${projectObj.available}">
          <header><h4> ${projectObj.title} </h4></header>
          <img src=${projectObj.screenshot} alt="${projectObj.title} screenshot" />
          <p>${projectObj.description}</p>
          <p>${projectObj.technologiesUsed}</p>
          <footer class="projectLinks">
            <a href=${projectObj.url}>URL</a>
            <a href=${projectObj.githubUrl}>GitHub Repo</a>
          </footer>
        </div>
      `;
    }
  });
  printToDom('projectsBody', cardsToPrint);
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
  createProjectCards(projects);
  $('body').on('click', '.navLinks', toggle);
};

init();
