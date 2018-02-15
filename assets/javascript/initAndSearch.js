var currentLoca = "";
var currentLoca = "";
var cityName = "";
var displayArray = [];

$(".information").hide();
$("#weather").hide();



$("#search-form").submit(function(){
    var search = $("#city-input").val();
    console.log(search);
    renderButtons(search);
    parseName(search);
    return false;
});

$("#search-formj").submit(function(){
    var search = $("#city-inputj").val();
    console.log(search);
    renderButtons(search);
    parseName(search);
    return false;
});

var renderButtons = function (val) {
    event.preventDefault();
    var obj = $("<li class='navButtons'><a class='nav-link' href='#'>").text(val);
    var divider = $("<li role='separator' class='divider'>");
    $(".navbarList").append(obj);   
    $(".navbarList").append(divider);
    
};

$(document).on("click",".navButtons",function(){
    var buttonVal = $(this).text();
    parseName(buttonVal);
});

var parseName = function(inputCity){
    $(".information").hide();
    var fullCity = inputCity;
    var arrayCity = fullCity.toLowerCase().split(",");
    cityName = arrayCity[0].trim().replace(/ /g, "-");
    var stateAbrv = arrayCity[1].trim();

    setWeatherBox(arrayCity[0],cityName,stateAbrv);
    $("#jumbo").hide();
    //hideSearch();
    //EmptyDivs();
} ;

var setWeatherBox = function (name1,name2,state) {
    var weatherURL = "https://api.wunderground.com/api/9b91158e94439d41/conditions/q/" + state + "/" + name1 + ".json";
    var cityPicURL = "https://api.teleport.org/api/urban_areas/slug:" + name2 + "/images/";
    if($("#weather_container").hide()){   
        $("#weather_container").fadeIn("slow")   
    }
    else if($("#weather_container").show()){
        $("#weather_container").fadeOut("slow");
    }
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        currentLoca = response.current_observation.display_location.latitude + "/" + response.current_observation.display_location.longitude;
        currentLoca2 = response.current_observation.display_location.latitude + "," + response.current_observation.display_location.longitude;
        $(".cityName").html(response.current_observation.display_location.full);
        $(".tempF").html(response.current_observation.temp_f + "&#176");
        $(".weathCondition").html("<img src=" + response.current_observation.icon_url + ">");    });

    $.ajax({
        url: cityPicURL,
        method: "GET"
    }).then(function (response) {
        var webIMG = response.photos[0].image.web;
        var mobileIMG = response.photos[0].image.web;
        $(".cityPic").html("<img src=" + webIMG + " width='100%' height='306'>");   });

    
    $("#weather").fadeIn();
};