import utilities from '../../helpers/utilities';
import techData from '../../helpers/data/techData';
import './technologies.scss';

const printTechnologies = () => {
  techData.getTechnologies()
    .then((tech) => {
      let techString = '';
      tech.forEach((techIcon) => {
        techString += `
        <p class="col-sm-3 col-6 mt-5 techIcon">${techIcon.icon}</p>
        `;
      });
      utilities.printToDom('techList', techString);
    }).catch((err) => console.error(err));
};

export default { printTechnologies };
