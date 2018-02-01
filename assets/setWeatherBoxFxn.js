var setWeatherBox = function (city) {
    arrayCity = city.split(",");
    var cityName = arrayCity[0];
    var stateAbrv = arrayCity[1];

    var weatherAPI = "http://api.wunderground.com/api/9b91158e94439d41/conditions/q/" + stateAbrv + "/" + cityName + ".json";
    var cityPicAPI = "https://api.teleport.org/api/urban_areas/slug:" + cityName + "/images/";

    $.ajax({
        url: weatherAPI,
        method: "GET"
    }).then(function (response) {
        $(".cityName").html(response.current_observation.display_location.full);
        $(".tempF").html(response.current_observation.temp_f);
        $(".weathCondition").html(response.current_observation.weather);
    });


    //must be lower case
    $.ajax({
        url: cityPicAPI,
        method: "GET"
    }).then(function (response) {
        var webIMG = response.photos[0].image.web;
        var mobileIMG = response.photos[0].image.web;
        $(".cityPic").html("<img src=" + webIMG + " width='900'>");


    });
}