var renderButtons = function(val) {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    // $("#buttons-view").empty();

    // Looping through the array of movies
    // for (var i = 0; i < movies.length; i++) {
    var obj = $("<button>").text(val);
    $(".city-buttons").append(obj);
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    //   var a = $("<button>");
    //   // Adding a class of movie-btn to our button
    //   a.addClass("movie-btn");
    //   // Adding a data-attribute
    //   a.attr("data-name", movies[i]);
    //   // Providing the initial button text
    //   a.text(movies[i]);
    //   // Adding the button to the buttons-view div
    //   $("#buttons-view").append(a);
    }
  