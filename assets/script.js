var city= 0;

$("#find-city").on("click", function(event) {
    event.preventDefault();
    
    
    city = $("#city-input").val();
    console.log(city);
        
    var lowerCity = city.toLowerCase();
    // var cityString = lowerCity.replace(/ /g, "-");
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    weatherDivHider();
    hideJumbo();
    hideSearch();
    EmptyDivs();
    // $("#city-input").val(" ");
});

$("#find-cityj").on("click", function(event) {
    event.preventDefault();

    
    city = $("#city-inputj").val();

    var lowerCity = city.toLowerCase();
    // var cityString = lowerCity.replace(/ /g, "-");
    setWeatherBox(lowerCity);
    renderButtons(lowerCity);
    weatherDivHider();
    hideJumbo();
    hideSearch();
    EmptyDivs();
});

$(document).on("click", ".headerButtons", function(){
    console.log($(this).text());
    
    setWeatherBox($(this).text());
    weatherDivHider();
    hideSearch();
    EmptyDivs();
    
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



