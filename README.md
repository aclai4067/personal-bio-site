# Personal Bio Site 

## Part 1: HTML & CSS Requirements

### Create a new directory for your personal site
1. Because the site will span throughout your 6 months we are going to put it in a special folder
2. While in `~/workspace/projects/personal`, make a directory called `personal-bio-site`
3. Push up the README.md to a master branch and then make a setup branch for all your usual setup.

### Use Git/Github branching
1. Branch by feature
2. Commit by significant change - or before you accidentally (on purpose) spill moonshine on your computer.

### Create the structure of your bio site
1. Create 3 files: index.html, main.css, and projects.js.
2. Use the HTML boilerplate below to create the shell of your personal bio site.
3. Fill in the HTML where it instructs you to do so.
4. Link your JS and CSS correctly in your HTML.
5. Give your bio site some basic styling; this doesn't have to be perfect - you'll have 6 months to iterate on it!

### Projects Section
1. Create an array and save it to a `projects` variable; this array should hold a bunch of objects that will represent projects you complete throughout this course that you will want to include in your portfolio.
2. Each object in the array should have the following properties (you will use dummy data for now):
3. Create two functions: printToDom and createProjectCards
4. Only print 'available' projects. In your `createProjectCards` function, add logic to only show the project on the page if it has a value of `true` in the `available` property.
5.  Call the ```createProjectCards();``` function in an init function that runs when the project loads.

## Part 2: Single Page Application

### Make the Navigation Bar Function on Click Events
1. Add event listener(s) so that when the user clicks on the navigation links, it triggers an event. Hint: you might need to use [prevent default](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to override the browser's default behavior for `<a>` tags.
2. Make each event show the appropriate content for that link and hide all other content (or at least content that should be displayed when you click on the other links). The following is the content you will want to hide or show depending on which link is clicked.
3. Decide which page you want to show on page load (your "home page") and have this content shown by default when the user arrives on the page.

## Bonus:

### Make your Event Listener Dynamic
Challenge yourself to only include the method `addEventListener` once in your JS file. Make the callback function dynamic so that based on the button clicked, the correct content shows. 