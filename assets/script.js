$("#find-city").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    hideJumbo();
    hideSearch();
});

$("#find-cityj").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-inputj").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    hideJumbo();
    hideSearch();
});

$(document).on("click", ".headerButtons", function(){
    console.log($(this).text());
    setWeatherBox($(this).text());
    hideSearch();
});

hideDivs();

$("#food_icon").on("click", function(event) {
    foodDivHider();
    console.log("food");
    $(".food_container").fadeToggle("slow");
});

$("#transport_icon").on("click", function(event) {
    transportDivHider();
    console.log("transportation");
    $(".news_container").fadeToggle("slow");
});

$("#concerts_icon").on("click", function(event) {
    concertDivHider();
    console.log("music");
    $(".concert_container").fadeToggle("slow");
});

$("#landmark_icon").on("click", function(event) {
    landmarkDivHider();
    console.log("landmark");
    $(".monument_container").fadeToggle("slow");
});



