# Personal Bio Site Part 1: HTML & CSS || Using JS to print projects to the page

## Requirements

### Create a new directory for your personal site
1. Because the site will span throughout your 6 months we are going to put it in a special folder
1. While in `~/workspace/projects/personal`, make a directory called `personal-bio-site`
1. Push up the README.md to a master branch and then make a setup branch for all your usual setup.

### Use Git/Github branching
1. Branch by feature
1. Commit by significant change - or before you accidentally (on purpose) spill moonshine on your computer.

### Create the structure of your bio site
1. Create 3 files: index.html, main.css, and projects.js.
1. Use the HTML boilerplate below to create the shell of your personal bio site.
1. Fill in the HTML where it instructs you to do so.
1. Link your JS and CSS correctly in your HTML.
1. Give your bio site some basic styling; this doesn't have to be perfect - you'll have 6 months to iterate on it!
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- TODO: Insert a title for your page -->
</head>

<body>
  <!-- Navigation -->
  <nav>
    <!-- TODO: Insert some sort of H1-H6 with your name here -->
    <ul id="navLinks">
      <li><a id="navToBio">Bio</a></li>
      <li><a id="navToTechnologies">Technologies</a></li>
      <li><a id="navToProjects">Projects</a></li>
    </ul>
  </nav>
  <!-- End Navigation -->

  <!-- Primary View -->
  <div class="fullPage" id="bioPage">
    <!-- TODO: Fill in bio info here: What is your background? Why do you want to go into development? What do you love about development? -->
  </div>
  <div class="fullPage" id="technologiesPage">
    <!-- TODO: Start an UL of all of the tools and technologies you've started learning so far. (You'll beef this page up later). -->
  </div>
  <div class="fullPage" id="projectsPage"></div>
  <!-- End Primary View -->

  <!-- Footer -->
  <footer class="page-footer">
    <!-- TODO: Fill in contact info here: Include things like email, LinkedIn, Twitter and GitHub links. -->
  </footer>
  <!-- End Footer -->
</body>
</html>
```


### Projects Section
1. Create an array and save it to a `projects` variable; this array should hold a bunch of objects that will represent projects you complete throughout this course that you will want to include in your portfolio.
2. Each object in the array should have the following properties (you will use dummy data for now):
```js
{
  title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}
```
3. Create two functions:
	* printToDom:  This function should accept 2 arguments: the ID of the element to print it in and a string to print.
	* createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented by a string) that includes all the information on the project. It should call the printToDom function for each project (hint: For this one, you'll be printing to the div with the ID `projectsPage`).
4. Only print 'available' projects. In your `createProjectCards` function, add logic to only show the project on the page if it has a value of `true` in the `available` property.
5.  Call the ```createProjectCards();``` function in an init function that runs when the project loads.