<<<<<<< HEAD

=======
>>>>>>> 4521c88f26f084a546292221d5a1afa6bf6c5d63
$("#find-city").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);

});

$("#find-cityj").on("click", function(event) {
    event.preventDefault();

    var city = $("#city-inputj").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
});

hideDivs();

$("#food_icon").on("click", function(event) {
    foodDivHider();
    console.log("food");
    $(".food_container").toggle();
});

$("#transport_icon").on("click", function(event) {
    transportDivHider();
    console.log("transportation");
    $(".news_container").toggle();
});

$("#concerts_icon").on("click", function(event) {
    concertDivHider();
    console.log("music");
    $(".concert_container").toggle();
});

$("#landmark_icon").on("click", function(event) {
    landmarkDivHider();
    console.log("landmark");
    $(".monument_container").toggle();
});



