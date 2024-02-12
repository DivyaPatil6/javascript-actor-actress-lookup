//Object "actorsDataObj" for storing actor associated to there corresponding movies
const actorsDataObj = {
    "actor_1": ["Movie-a", "Movie-b", "Movie-c"],
    "actor_2": ["Movie-b", "Movie-d"],
    "actor_3": ["Movie-d", "Movie-e", "Movie-f"],
    "actor_4": ["Movie-a", "Movie-d"],
    "actor_5": ["Movie-a", "Movie-b"],
}

//Function to find actor based on the given argument "movieName" by the user
function findActorsByMovieName(movieName) {
    let key = Object.keys(actorsDataObj); //acessing actors 
    let n = key.length;
    let actor = []; //Empty array to the resultant actors 
    for (let i = 0; i < n; i++) {
        let actorKey = key[i];
        //checking for does movieName exists for the corresponding actor
        if (actorsDataObj[actorKey].includes(movieName)) {
            actor.push(actorKey);
        }
    }
    console.log(actor.length > 0 ? actor : "No actors found for the given movie name"); //printing the resultant actors on console with handling the inappropriate input by the user
}

//Function to find movie based on the given argument "actorName" by the user
function findMoviesByActorName(actorName) {
    //Accessing movie in the object based on actorName
    if (actorsDataObj[actorName]) {
        console.log(actorsDataObj[actorName]);
    }
    //Handling inappropriate input by the user 
    else {
        console.log("No movies found for the given actor name");
    }
}

//exporting both function so that they can be accessed externally
module.exports = { findActorsByMovieName, findMoviesByActorName };