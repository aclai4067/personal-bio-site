import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';

const createProjectCards = () => {
  let cardsToPrint = '';
  projectData.getProjects().then((projectArr) => {
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
    utilities.printToDom('projectsBody', cardsToPrint);
  }).catch((err) => console.error(err));
};

export default { createProjectCards };
