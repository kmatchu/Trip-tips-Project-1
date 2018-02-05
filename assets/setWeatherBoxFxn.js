<<<<<<< HEAD
var renderButtons = function(val) {
=======
var cityName;
var currentLoca;
var currentLoca2;

var renderButtons = function (val) {
>>>>>>> ac8e278a98a0b2821ae2f411806a12df8a4cc032
    var obj = $("<button>").text(val);
    obj.addClass("headerButtons");
    $(".cityButtons").append(obj);
    $(".headerButtons").on("click", console.log(val));//on-click runs on call instead of on-click
    event.preventDefault();
}

var setWeatherBox = function (lowerCity) {
    
    console.log("hey");
    var arrayCity = lowerCity.split(",");
    var cityName = arrayCity[0];
    var stateAbrv = arrayCity[1].trim();

    var weatherAPI = "http://api.wunderground.com/api/9b91158e94439d41/conditions/q/" + stateAbrv + "/" + cityName + ".json";
    var cityPicAPI = "https://api.teleport.org/api/urban_areas/slug:" + cityName + "/images/";

    $.ajax({
        url: weatherAPI,
        method: "GET"
    }).then(function (response) {
<<<<<<< HEAD
=======
        var currentLat = response.current_observation.display_location.latitude;
        var currentLong = response.current_observation.display_location.longitude;
        currentLoca = currentLat + "/" + currentLong;
        currentLoca2 = currentLat + "," + currentLong;
>>>>>>> ac8e278a98a0b2821ae2f411806a12df8a4cc032
        $(".cityName").html(response.current_observation.display_location.full);
        $(".tempF").html(response.current_observation.temp_f + "&#176");
        $(".weathCondition").html("<img src=" + response.current_observation.icon_url + ">");
    });


    //must be lower case
    $.ajax({
        url: cityPicAPI,
        method: "GET"
    }).then(function (response) {
        var webIMG = response.photos[0].image.web;
        var mobileIMG = response.photos[0].image.web;
        $(".cityPic").html("<img src=" + webIMG + " width='1200' height='306'>");


    });
<<<<<<< HEAD
}
=======
    $("#weather").fadeIn();

}

$(".food").on("click", function () {
    var genre = $(this).val();
    var foodAPI = 'https://nu-yelp-api.herokuapp.com/api/all/' + currentLoca + '/' + genre + '/9219';
    console.log(foodAPI);
    $.ajax({
        url: foodAPI,
        method: "GET"
    }).then(function (response) {
        var obj = JSON.parse(response);
        for(i=0;i<4;i++){
        $("#optionF" + i ).text(obj.businesses[i].name);
        };
        $(".optionF").on("click", function(){
            var currentFoodVal = $(this).val();
            console.log(currentFoodVal);
            var foodHTMLToAdd = "<ul><li>" +obj.businesses[currentFoodVal].name + "</li><li>" + obj.businesses[currentFoodVal].categories[0].title +"</li><li><a href=" + obj.businesses[currentFoodVal].url + ">Yelp Link</a></li><li>" + obj.businesses[currentFoodVal].display_phone + "</li></ul>";
            $("#currentFood").html(foodHTMLToAdd);

        });
    });
    });

$(".music").on("click", function () {
    var genre = $(this).val();
    var concertsAPI = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityName + "&classificationName=" + genre + "&apikey=4gaxV68thViYmaadixAGKQwTkcdccIg0";
    console.log(concertsAPI);
    $.ajax({
        url: concertsAPI,
        method: "GET"
    }).then(function (response) {
        for (i = 0; i < 4; i++) {
            $("#optionC" + i).text(response._embedded.events[i]._embedded.attractions[0].name);
        };

        $(".musOption").on("click", function () {

            var currentVal = $(this).val();
            console.log(currentVal);
            console.log(response._embedded.events[currentVal].name);
            var htmlToAdd = "<ul><li>" + response._embedded.events[currentVal].name + "</li><li>" + response._embedded.events[currentVal]._embedded.venues[0].name + ", " + response._embedded.events[currentVal].dates.start.localDate + "</li><li><a href=" + response._embedded.events[currentVal].url + ">Purchase Tickets</a></li></ul>"

            $("#currentMusic").html(htmlToAdd);
        });
    });
});


>>>>>>> ac8e278a98a0b2821ae2f411806a12df8a4cc032
