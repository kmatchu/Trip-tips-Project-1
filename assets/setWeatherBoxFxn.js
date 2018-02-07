var cityName;
var currentLoca;

var displayArray = [];

var currentLoca2;

var renderButtons = function (val) {
    var obj = $("<li><a class='nav-link' href='#'>").text(val);
    var divider = $("<li role='separator' class='divider'>")
    obj.addClass("headerButtons");
    $(".navbarList").append(obj);
    $(".navbarList").append(divider);

    $(".headerButtons").on("click", console.log(val));//on-click runs on call instead of on-click
    event.preventDefault();
}

var setWeatherBox = function (lowerCity) {

    
    console.log("hey");

    var arrayCity = lowerCity.split(",");
    cityName = arrayCity[0];
    var stateAbrv = arrayCity[1].trim();

    var cityImgSearchStr = cityName.replace(/ /g, "-");

    var weatherAPI = "http://api.wunderground.com/api/9b91158e94439d41/conditions/q/" + stateAbrv + "/" + cityName + ".json";

    console.log(weatherAPI);
    var cityPicAPI = "https://api.teleport.org/api/urban_areas/slug:" + cityImgSearchStr + "/images/";


    $.ajax({
        url: weatherAPI,
        method: "GET"
    }).then(function (response) {
        var currentLat = response.current_observation.display_location.latitude;
        var currentLong = response.current_observation.display_location.longitude;
        currentLoca = currentLat + "/" + currentLong;
        currentLoca2 = currentLat + "," + currentLong;
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

        $(".cityPic").html("<img src=" + webIMG + " width='100%' height='306'>");


    });
    $("#weather_container").fadeIn();

    


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
        console.log(obj);

        for(i=0;i<8;i++){
        $("#optionF" + i ).text(obj.businesses[i].name);
        };
        $(".optionF").on("click", function(){
            if(displayArray.length === 3){ alert("Please clear a box") }
            else{
            var currentFoodVal = $(this).val();
            // var index = displayArray.length;
            // var foodHTMLToAdd = "<div class='col-md-3 currentOptions'><button class='x'>X</button><ul><li>" + obj.businesses[currentFoodVal].name + "</li><li>" + obj.businesses[currentFoodVal].categories[0].title +"</li><li><a href=" + obj.businesses[currentFoodVal].url + ">Yelp Link</a></li><li>" + obj.businesses[currentFoodVal].display_phone + "</li></ul></div>";
            var foodHTMLToAdd = "<div class='thumbnail foodThumb'><img src=" + obj.businesses[currentFoodVal].image_url + " alt="+ obj.businesses[currentFoodVal].name + " width= 100% /><div class='caption'><p id='restName'>" + obj.businesses[currentFoodVal].name + "</p><p id='restCat'>" + obj.businesses[currentFoodVal].categories[0].title + "</p><p>" + obj.businesses[currentFoodVal].display_phone +"</p><p><a href='" + obj.businesses[currentFoodVal].url + "' target='_blank' class='btn btn-primary' role='button'>Yelp Link</a><a href='#' class= 'btn btn-primary x' role='button'>X</a></p></div></div>";
            displayArray.push(foodHTMLToAdd);
            render();
        };
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



var render = function(){
    $(".currentOptions").remove();
    for(var i=0;i<displayArray.length;i++){
       $($.parseHTML(displayArray[i])).children("button").data("index",i);
        $(".appendHere").append(displayArray[i]);
    }
};

$(document).on("click",".x", function(){
    current = $(this).data("index");
    displayArray.splice(current,1);
    render();          
}); 

