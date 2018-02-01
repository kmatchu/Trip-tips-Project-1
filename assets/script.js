//for both search bars:

$("#search-form").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    console.log(city);
    setWeatherBox(city);
});

$("#search-formj").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    console.log(city);
    setWeatherBox(city);
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



