//Importing both the functions from the app.js 
const { findActorsByMovieName, findMoviesByActorName } = require("./app");

//Test case 1 to find actor by movie name
console.log("Test case 1");
findActorsByMovieName("Movie-a");
//Expected output [ 'actor_1', 'actor_4', 'actor_5' ]

//Test case 2 to find movie by actor name
console.log("Test case 2");
findMoviesByActorName("actor_1");
//Expected output [ 'Movie-a', 'Movie-b', 'Movie-c' ]

//Test case 3 for inappropriate movie name
console.log("Test case 3");
findActorsByMovieName("Movie-z");
//Expected output No actors found for the given movie name

//Test case 4 for inappropriate actor name
console.log("Test case 4");
findMoviesByActorName("actor_6");
//Expected output No movies found for the given actor name

//Test case 5 for empty input for movie name
console.log("Test case 5");
findActorsByMovieName("");
//Expected output No actors found for the given movie name

//Test case 6 for empty input for actor name
console.log("Test case 6");
findMoviesByActorName("");
//Expected output No movies found for the given actor name