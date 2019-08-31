console.log('This works!');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const projects = [
    {
        title: "Cool Project 1", 
        screenshot: "https://live.staticflickr.com/1/17367_521ff9c374.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project 2", 
        screenshot: "https://live.staticflickr.com/1/17367_521ff9c374.jpg", 
        description: "This is the second best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project 3", 
        screenshot: "https://live.staticflickr.com/1/17367_521ff9c374.jpg", 
        description: "This is the third best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project 4", 
        screenshot: "https://live.staticflickr.com/1/17367_521ff9c374.jpg", 
        description: "This is the fourth best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];

const createProjectCards = (projectArr) => {
    let cardsToPrint = '';
    for (let i = 0; i < projectArr.length; i++) {
        let projectObj = projectArr[i];
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
            `
        }
    }
    printToDom('projectsBody', cardsToPrint);
};

createProjectCards(projects);