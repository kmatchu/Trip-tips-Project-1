
//for both search bars:

$("#search-form").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-input").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
});

$("#search-formj").on("click", function(event) {
    event.preventDefault();
    var city = $("#city-inputj").val();
    var lowerCity = city.toLowerCase();
    setWeatherBox(lowerCity);
});
