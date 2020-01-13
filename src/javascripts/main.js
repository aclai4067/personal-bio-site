
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery';
import '../styles/main.scss';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import projects from './components/projects/projects';
import tech from './components/technologies/technologies';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  projects.createProjectCards();
  tech.printTechnologies();
};

init();
