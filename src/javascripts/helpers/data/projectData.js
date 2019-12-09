import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projects = response.data;
      const projectArr = [];
      Object.keys(projects).forEach((fbId) => {
        projects[fbId].id = fbId;
        projectArr.push(projects[fbId]);
      });
      resolve(projectArr);
    }).catch((err) => reject(err));
});

export default { getProjects };
