import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const myTech = response.data;
      const tech = [];
      Object.keys(myTech).forEach((fbId) => {
        myTech[fbId].id = fbId;
        tech.push(myTech[fbId]);
      });
      resolve(tech);
    }).catch((err) => reject(err));
});

export default { getTechnologies };
