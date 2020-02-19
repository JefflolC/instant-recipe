# Instant Recipe
Instant Recipe is a web application that stores recipes and allows users to search through the database for recipes. 

![Demo](https://github.com/JefflolC/instant-recipe/blob/master/screenshots/demo.gif)

## Features
* Users can add a recipe to the database
* Users can search through the database for a recipe
* Users can view the details of a recipe
* Users can delete a recipe from the database


## Getting Started
A link to a heroku server will be set up in the future. If you're still interested in trying this application out, you can clone this repository for the time being. However, this application requires two servers to run and **your own MongoDB credentials**. 

**MongoDB**

You can create a MongoDB account and retreive the credentials required to connect this application. Inside the `.env` file under the `backend` folder, simply replace `<password>` with the password for the admin user to connect this application to your MongoDB server.

The file looks like this.
```
ATLAS_URI=mongodb+srv://admin:<password>@recipetracker-tqxsm.mongodb.net/test?retryWrites=true&w=majority
```

**React Frontend**
1. `npm install`
2. `npm start`

**Express Backend**
1. `cd backend`
2. `npm install`
3. `nodemon server`


## Technologies
**Frontend**
* React
* Redux with React-Redux
* Axios
* Sass

**Backend**
* NodeJS
* Express

**Database**
* MongoDB with Mongoose

**Other Dependencies**
* Cors
* Dotenv
* Nodemon

## Project Status
The project is completed in the sense that I had set out to accomplish my original goal. I was able to learn how the MERN stack works and utilize MongoDB. This project gave me the opportunity to experience both the frontend and backend aspect of development.

Working with the frontend, I was able to:
* Design wireframes for the application
* Illustrate a mockup of the application
* Develop the design into the application
* Iterate through the designs and make changes

Working with the backend, I was able to:
* Set up an Express server and connect a MongoDB server to the application
* Implement basic functionalities that allowed the application the be functional for demonstration

## Future Features
There are still improvements to be made to this application and other features that can enhance the experience of this application. I would like to continue to add features (in no particular order) in the future if time allows.

**Features to be added**
* Deploy onto Heroku
* Personal accounts with the option to favourite recipes
* Add custom pictures
* Filter option
* Recipe edit
* Recipe recommendation based on available ingredients

**Experience Enhancement**
* [Change the form](https://github.com/JefflolC/instant-recipe/blob/master/screenshots/form-alt.jpg) so it's easier to fill out details
  * Validation for form inputs
* Alter some designs so that it is more accessible and responsive
* Better search query
* Instant rendering for searching/deleting recipe

**Bugs to be squashed**
* No unique ID for recipes
* Scroll position remains unchanged instead of restarting at the top of the page

## License
> You can check out the full license [here](https://choosealicense.com/licenses/mit/)

This project is licensed under the terms of the MIT license.