
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

