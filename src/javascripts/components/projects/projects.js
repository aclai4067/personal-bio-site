import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';

const createProjectCards = () => {
  let cardsToPrint = '';
  projectData.getProjects().then((projectArr) => {
    projectArr.forEach((projectObj) => {
      if (projectObj.available) {
        cardsToPrint += `
          <div class="row d-flex flex-wrap mb-4 p-4 projectCard ${projectObj.available}">
            <div class="projectImage col-lg-4">
              <img class="card-img" src=${projectObj.screenshot} alt="${projectObj.title} screenshot" />
            </div>
            <div class="projectDetails col-lg-8">
              <h4 class="card-title"> ${projectObj.title} </h4>
              <p>${projectObj.description}</p>
              <h6>Technologies:</h6>
              <p>${projectObj.technologiesUsed}</p>
              <footer class="card-footer projectLinks">
                <a href=${projectObj.url} target="_blank">Check it out!</a>
                <a href=${projectObj.githubUrl} target="_blank">GitHub Repo</a>
              </footer>
            </div>
          </div>
        `;
      }
    });
    utilities.printToDom('projectsBody', cardsToPrint);
    $('.projectCard:odd').addClass('flex-row-reverse');
  }).catch((err) => console.error(err));
};

export default { createProjectCards };
