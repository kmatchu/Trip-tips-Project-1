
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



$(".food_container").hide();
$(".monument_container").hide();
$(".news_container").hide();
$(".concert_container").hide();

$("#food_icon").on("click", function(event) {
    console.log("food");
    $(".food_container").toggle();
});

$("#transport_icon").on("click", function(event) {
    console.log("transportation");
    $(".news_container").toggle();
});

$("#concerts_icon").on("click", function(event) {
    console.log("music");
    $(".concert_container").toggle();
});

$("#landmark_icon").on("click", function(event) {
    console.log("landmark");
    $(".monument_container").toggle();
});



