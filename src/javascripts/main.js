
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
// import $ from 'jquery';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import projects from './components/projects/projects';

// const bodyDivs = document.getElementsByClassName('fullPage');

// const toggle = (e) => {
//   const selectedLink = $(e.target).attr('id');
//   for (let i = 0; i < bodyDivs.length; i += 1) {
//     if (selectedLink === bodyDivs[i].classList[1]) {
//       bodyDivs[i].style.display = 'block';
//     }
//     if (selectedLink !== bodyDivs[i].classList[1]) {
//       bodyDivs[i].style.display = 'none';
//     }
//   }
// };

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  projects.createProjectCards();
//   $('body').on('click', '.navLinks', toggle);
};

init();
