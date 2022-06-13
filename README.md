# CT-express-hw1
Setting up Routing

During this week, we’ll be progressing through a Twitter clone application. You’ll be adding onto it each night for homework as we discuss different topics in class.

The Finished Product

You can view a “finished” example version of the application here:

https://codingtemple-tweeta.herokuapp.com/

By the end of the project your application will have the following pages:
This page contains a form to add new posts as well as a list of all of the posts that have been made in date-descending order.
This will be a dynamic route that includes a user id. Using this user ID you will dynamically fill in the page template with the user’s username and posts.
This will be a dynamic route that displays the currently logged in user’s username and posts.
These will each be a page with either a login or register form for authentication.

Today we’ll be setting up the framework for your application. We’ll focus on creating a couple of routes that we can build off of in the coming days.

Build out the following routes, each route can be very basic and just render its corresponding template from the next step:
Home
Profile
Login
Register
User


You’ll also need to build out the following EJS templates/template parts:
Pages - For these you can just include the header and footer template parts, and leave an h1 on the page with the page’s name
Header - This should be a functional header including a bootstrap navbar, with functional routing between the routes we have set up
Footer