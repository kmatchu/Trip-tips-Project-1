var currentLoca = "";
var currentLoca = "";
var cityName = "";
var displayArray = [];

$(".information").hide();
$("#weather").hide();


/**
 * Turns text within the navbar search box into a value which can be used later.
 * @callback
 */
$("#search-form").submit(function(){
    var search = $("#city-input").val();
    console.log(search);
    renderButtons(search);
    parseName(search);
    return false;
});

/**
 * Turns text within the main search box into a value which can be used later.
 * @callback
 */
$("#search-formj").submit(function(){
    var search = $("#city-inputj").val();
    console.log(search);
    renderButtons(search);
    parseName(search);
    return false;
});

/**
 * Creates a button for the city just searched, clicking the button will do the same process as searching for that city again. The button is appended to a dropdown list in the navbar.
 * @param {string} val - the text for the button to display. In the program, this is given when called to be the text from a search.
 */
var renderButtons = function (val) {
    event.preventDefault();
    var obj = $("<li class='navButtons'><a class='nav-link' href='#'>").text(val);
    var divider = $("<li role='separator' class='divider'>");
    $(".navbarList").append(obj);   
    $(".navbarList").append(divider);
};

/**
 * Sets the webpage to display the appropriate city after one of the navbar city buttons is clicked.
 */
$(document).on("click",".navButtons",function(){
    var buttonVal = $(this).text();
    parseName(buttonVal);
});

/**
 * Takes the raw input and turns it into workable forms to be used by later functions.
 * @param {string} inputCity -the raw input from the search bar
 */
var parseName = function(inputCity){
    $(".information").hide();
    var fullCity = inputCity;
    var arrayCity = fullCity.toLowerCase().split(",");
    /** @global */
    cityName = arrayCity[0].trim().replace(/ /g, "-");
    var stateAbrv = arrayCity[1].trim();

    setWeatherBox(arrayCity[0],cityName,stateAbrv);
    $("#jumbo").hide();
} ;

/**
 * Using ajax calls, gets the information for the searched city and fills the weather div with the relevant information.
 * @param {string} name1 - The name of just the city, lower case
 * @param {string} name2 - The name of just the city, lower case and spaces replaced with hyphens
 * @param {string} state - The two initials for the state of the searched city 
 */
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
        /**
         * AJAX callback function
         * @param {obj} - the JSON object
         * @callback
         */
    }).then(function (response) {
        /** @global */
        currentLoca = response.current_observation.display_location.latitude + "/" + response.current_observation.display_location.longitude;
        /** @global */
        currentLoca2 = response.current_observation.display_location.latitude + "," + response.current_observation.display_location.longitude;
        $(".cityName").html(response.current_observation.display_location.full);
        $(".tempF").html(response.current_observation.temp_f + "&#176");
        $(".weathCondition").html("<img src=" + response.current_observation.icon_url + ">");    });

    $.ajax({
        url: cityPicURL,
        method: "GET"
        /**
         * AJAX callback function
         * @param {obj} - the JSON object
         * @callback
         */
    }).then(function (response) {
        var webIMG = response.photos[0].image.web;
        var mobileIMG = response.photos[0].image.web;
        $(".cityPic").html("<img src=" + webIMG + " width='100%' height='306'>");   });

    
    $("#weather").fadeIn();
};