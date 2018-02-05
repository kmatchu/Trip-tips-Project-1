var city= 0;

$("#find-city").on("click", function(event) {
    event.preventDefault();
    city = $("#city-input").val();
    console.log(city);
    $("#weather").show();
    
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    hideJumbo();

});

$("#find-cityj").on("click", function(event) {
    event.preventDefault();
    $("#weather").show();
    city = $("#city-inputj").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    hideJumbo();
});

$(document).on("click", ".headerButtons", function(){
    console.log($(this).text());
    setWeatherBox($(this).text());
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



