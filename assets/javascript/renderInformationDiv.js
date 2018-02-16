/**
 * Using a global variable for location, reset at each new search, and the argument which will be the "genre" of the button clicked which called this, the API URL is determined. An ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} thisGenre the value of the button that was pressed to trigger this function
 */
var foodRender = function(thisGenre){
    var foodURL = 'https://nu-yelp-api.herokuapp.com/api/all/' + currentLoca + '/' + thisGenre + '/9219';
                $.ajax({
                    url: foodURL,
                    method: "GET"
                /**
                * Callback function for the AJAX call
                * @param {string} response - A string which is immediately parsed into the JSON object
                * @callback
                */
                }).then(function (response) {
                    var obj = JSON.parse(response);
                    var thisHTML = "";
                    for (i = 0; i < 8; i++) {
                        thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonFood btn btn-primary' value = " + i + ">" + obj.businesses[i].name + "</button></div></div>";
                        };
                    $(".buttonAppendHere").html(thisHTML)
                    /**
                    * If there is room for this new div, then it is pushed to the global display array and the render function is run again
                    * @callback
                    */
                    $(".optionButtonFood").on("click", function () {
                        if (displayArray.length === 4) { alert("Please clear a box") }
                        else {
                            var currentFoodVal = $(this).val();
                            var foodHTMLToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=" + obj.businesses[currentFoodVal].image_url + " alt="+ obj.businesses[currentFoodVal].name + " class = 'displayPhoto' /><ul><li>" + obj.businesses[currentFoodVal].name + "</li><li>" + obj.businesses[currentFoodVal].categories[0].title + "</li><li>" + obj.businesses[currentFoodVal].display_phone + "</li><li><a href=" + obj.businesses[currentFoodVal].url + ">Yelp Link</a></li></ul></div>";
                            /** @global */
                            displayArray.push(foodHTMLToAdd);
                            render();
                        };
                    });

                });
};

/**
 * Using the global variable for city name, reset at each new search, and the argument which will be the "genre" of the button clicked which called this, the API URL is determined. An ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} thisGenre - the value of the button which was pressed to trigger this function
 */
var concertRender = function(thisGenre){
    var concertsURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityName + "&classificationName=" + thisGenre + "&apikey=4gaxV68thViYmaadixAGKQwTkcdccIg0";
        $.ajax({
            url: concertsURL,
            method: "GET"
            /**
            * Callback function for the AJAX call
            * @param {obj} response - The JSON object
            * @callback
            */
            }).then(function (response) {
                var thisHTML = "";
                for (i = 0; i < 8; i++) {
                    thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonMusic btn btn-primary' value = " + i + ">" + response._embedded.events[i]._embedded.attractions[0].name + "</button></div></div>";
                    $(".buttonAppendHere").html(thisHTML)
                    };
            /**
            * If there is room for this new div, then it is pushed to the global display array and the render function is run again
            * @callback
            */
            $(".optionButtonMusic").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear a box")}
            else{
            var currentVal = $(this).val();
            var concertHTMLToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=" + response._embedded.events[currentVal].images[0].url + " alt="+ response._embedded.events[currentVal].name + " /><ul><li>" + response._embedded.events[currentVal].name + "</li><li>" + response._embedded.events[currentVal]._embedded.venues[0].name + ", " + response._embedded.events[currentVal].dates.start.localDate + "</li><li><a href=" + response._embedded.events[currentVal].url + ">Purchase Tickets</a></li></ul></div>";
            /** @global */
            displayArray.push(concertHTMLToAdd);
            render();   
            };
        });
    });
};

/**
 * Using the a passed string to search, the argument which will be inserted into the API URL. An ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} location - a string used within the google search, for transportation stations near the city name global
 */
var stationsRender = function(location){
    var stationsURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=transportation+station+in+" + location + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    $.ajax({
        url: stationsURL,
        method: "GET"
        /**
         * Callback function for the AJAX call
         * @param {obj} response - The JSON object
         * @callback
         */
        }).then(function (response) {
            var thisHTML = "";
            for (i = 0; i < 8; i++) {
                thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonStation btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
                $(".buttonAppendHere").html(thisHTML)
                };
    /**
    * If there is room for this new div, then it is pushed to the global display array and the render function is run again
    * @callback
    */
    $(".optionButtonStation").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
            else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " class='btn btn-primary' role='button' target='_blank'>Website</a></li></ul></div>"
                /** @global */
                displayArray.push(htmlToAdd);
                render();   
                };
            });
        });
};

/**
 * Using the passed variable for location, which will be the 'genre' of the clicked button which will be a string added onto the city name global, reset at each new search, the API URL is determined and an ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} location the value of the button that was pressed to trigger this function, briefly called the 'genre'
 */
var hotelRender = function(location){
    var hotelURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotel+" + location + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    $.ajax({
        url: hotelURL,
        method: "GET"
        /**
         * Callback function for the AJAX call
         * @param {obj} response - The JSON object
         * @callback
         */
        }).then(function (response) {
            var thisHTML = "";
            for (i = 0; i < 8; i++) {
                thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonHotel btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
                $(".buttonAppendHere").html(thisHTML);
                };
    
    /**
    * If there is room for this new div, then it is pushed to the global display array and the render function is run again
    * @callback
    */
    $(".optionButtonHotel").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
            else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " class='btn btn-primary' role='button' target='_blank'>Website</a></li></ul></div>"
                /** @global */
                displayArray.push(htmlToAdd);
                render();   
            };
        });
    });
};

/**
 * Using the passed variable for location, which will be the 'genre' of the clicked button which will be the city name global, reset at each new search, the URL is determined and not an ajax call, just a standard link, gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} location the value of the button that was pressed to trigger this function, briefly called the 'genre'
 */
var mapRender = function(location){
    var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + location + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    if(displayArray.length === 1){ alert("Please clear the box")}
    else{
    var htmlToAdd = "<div class='col-md-6 currentOptions'><button class='x'>X</button><img src=" + mapURL + " alt='citymap' height = '100%' /></div>";
    /** @global */
    displayArray.push(htmlToAdd);
    render();   };
};

/**
 * Using the passed variable for location, which will be the 'genre' of the clicked button which will be the city name global, reset at each new search, the API URL is determined and an ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} location the value of the button that was pressed to trigger this function, briefly called the 'genre'
 */
var newsRender = function(location){
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=9bea106de39c43339a278e2b55fad5ef&q=" + location;
    $.ajax({
        url: nytURL,
        method: "GET"
        /**
         * Callback function for the AJAX call
         * @param {obj} response - The JSON object
         * @callback
         */
        }).then(function (response) {
        var thisHTML = "";
        for (i = 0; i < 8; i++) {
            thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonNews btn btn-primary' value = " + i + ">" + response.response.docs[i].headline.main + "</button></div></div>";
            $(".buttonAppendHere").html(thisHTML);
        };
                /**
                * If there is room for this new div, then it is pushed to the global display array and the render function is run again
                * @callback
                */
                $(".optionButtonNews").on("click", function () {
                if(displayArray.length === 2){ alert("Please clear the box")}
                else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-3 currentOptions thumbnail'><button class='x'>X</button><img src=https://static01.nyt.com/" + response.response.docs[currentVal].multimedia[0].url + " /><ul><li><h3>" + response.response.docs[currentVal].headline.main + "</h3></li><li font-size= 11px>" + response.response.docs[currentVal].snippet + "</li><li><a href =" + response.response.docs[currentVal].web_url + " target = '_blank'>Read More</a></ul></div>"; 
                /** @global */
                displayArray.push(htmlToAdd);
                render();
                }
            });
        });
    };
/**
 * Using passed-in long strings which display the google results we want, we build the correct API url and an ajax call then gets any information needed to complete the framework of the information div, and appends and displays it all on the page.
 * @param {string} types - prebuilt long strings, passed by being the value of the button which was click
 */
    var attractionRender = function(types){
    var attractURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLoca2 + "&radius=10000&rankby=prominence&types=" + types + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto";
    $.ajax({
        url: attractURL,
        method: "GET"
        /**
         * Callback function for the AJAX call
         * @param {obj} response - The JSON object
         * @callback
         */
    }).then(function (response) {
        var thisHTML = "";
        for (i = 0; i < 8; i++) {
            thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonAttract btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
            $(".buttonAppendHere").html(thisHTML);
        };
        /**
         * If there is room for this new information, then it is pushed to the global display array and the render function is run again
         * @callback
         */
        $(".optionButtonAttract").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
                else{
            var currentVal = $(this).val();
            var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" + response.results[currentVal].vicinity + "</li><li><a target=_blank href=https://www.google.com/maps/place/" + response.results[currentVal].vicinity.replace(/ /g, "+") + ">Google Map Location</a></li></ul>";
                /** @global */
                displayArray.push(htmlToAdd);
                render();
        };
    });
});
};

/** 
 * This clears the display array and re-renders the display, clearing the boxes when you switch 'genres'
*/
var reset = function(){
    displayArray = [];
    render();
    $(".buttonAppendHere").html("");
}

/** 
 * This uses the global display array to make the display, after deleting the current display. The array elements are already strings of html to be appended as divs. The x button attached to each div is assigned a value corresponding to its place in the array.
*/
var render = function(){
    $(".currentOptions").remove();
    for(var i=0;i<displayArray.length;i++){
        var obj = $.parseHTML(displayArray[i]);
        $(obj).children("button").val(i);
        $(".appendHere").append(obj);
        $(".appendHere").hide().fadeIn("slow");
    }
    
};

/**
 * Deletes an element from the display array at the index of the value of the x button clicked. The display is then re-rendered with the new, smaller display array.
 * @callback
 */
$(document).on("click",".x", function(){
    current = $(this).val();
    displayArray.splice(current,1);
    render();          
}); 