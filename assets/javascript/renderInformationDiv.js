var foodRender = function(thisGenre){
    var foodURL = 'https://nu-yelp-api.herokuapp.com/api/all/' + currentLoca + '/' + thisGenre + '/9219';
                $.ajax({
                    url: foodURL,
                    method: "GET"
                }).then(function (response) {
                    var obj = JSON.parse(response);
                    var thisHTML = "";
                    for (i = 0; i < 8; i++) {
                        thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonFood btn btn-primary' value = " + i + ">" + obj.businesses[i].name + "</button></div></div>";
                        };
                    $(".buttonAppendHere").html(thisHTML)
                    $(".optionButtonFood").on("click", function () {
                        if (displayArray.length === 4) { alert("Please clear a box") }
                        else {
                            var currentFoodVal = $(this).val();
                            var foodHTMLToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=" + obj.businesses[currentFoodVal].image_url + " alt="+ obj.businesses[currentFoodVal].name + " class = 'displayPhoto' /><ul><li>" + obj.businesses[currentFoodVal].name + "</li><li>" + obj.businesses[currentFoodVal].categories[0].title + "</li><li>" + obj.businesses[currentFoodVal].display_phone + "</li><li><a href=" + obj.businesses[currentFoodVal].url + ">Yelp Link</a></li></ul></div>";
                            displayArray.push(foodHTMLToAdd);
                            render();
                        };
                    });

                });
};

var concertRender = function(thisGenre){
    var concertsURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityName + "&classificationName=" + thisGenre + "&apikey=4gaxV68thViYmaadixAGKQwTkcdccIg0";
        $.ajax({
            url: concertsURL,
            method: "GET"
            }).then(function (response) {
                var thisHTML = "";
                for (i = 0; i < 8; i++) {
                    thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonMusic btn btn-primary' value = " + i + ">" + response._embedded.events[i]._embedded.attractions[0].name + "</button></div></div>";
                    $(".buttonAppendHere").html(thisHTML)
                    };

        $(".optionButtonMusic").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear a box")}
            else{
            var currentVal = $(this).val();
            var concertHTMLToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=" + response._embedded.events[currentVal].images[0].url + " alt="+ response._embedded.events[currentVal].name + " /><ul><li>" + response._embedded.events[currentVal].name + "</li><li>" + response._embedded.events[currentVal]._embedded.venues[0].name + ", " + response._embedded.events[currentVal].dates.start.localDate + "</li><li><a href=" + response._embedded.events[currentVal].url + ">Purchase Tickets</a></li></ul></div>";
            // Can this be made global?
            displayArray.push(concertHTMLToAdd);
            render();   
            };
        });
    });
};

var stationsRender = function(location){
    var stationsURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=transportation+station+in+" + location + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    $.ajax({
        url: stationsURL,
        method: "GET"
        }).then(function (response) {
            var thisHTML = "";
            for (i = 0; i < 8; i++) {
                thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonStation btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
                $(".buttonAppendHere").html(thisHTML)
                };
    
    $(".optionButtonStation").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
            else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " class='btn btn-primary' role='button' target='_blank'>Website</a></li></ul></div>"
                displayArray.push(htmlToAdd);
                render();   
                };
            });
        });
};

var hotelRender = function(location){
    var hotelURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotel+" + location + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    $.ajax({
        url: hotelURL,
        method: "GET"
        }).then(function (response) {
            var thisHTML = "";
            for (i = 0; i < 8; i++) {
                thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonHotel btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
                $(".buttonAppendHere").html(thisHTML);
                };
    
    $(".optionButtonHotel").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
            else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " class='btn btn-primary' role='button' target='_blank'>Website</a></li></ul></div>"
                displayArray.push(htmlToAdd);
                render();   
            };
        });
    });
};

var mapRender = function(location){
    var mapURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + location + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    if(displayArray.length === 1){ alert("Please clear the box")}
    else{
    var htmlToAdd = "<div class='col-md-6 currentOptions'><button class='x'>X</button><img src=" + mapURL + " alt='citymap' height = '100%' /></div>";
    displayArray.push(htmlToAdd);
    render();   };
};

var newsRender = function(location){
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=9bea106de39c43339a278e2b55fad5ef&q=" + location;
    $.ajax({
        url: nytURL,
        method: "GET"
        }).then(function (response) {
        var thisHTML = "";
        for (i = 0; i < 8; i++) {
            thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonNews btn btn-primary' value = " + i + ">" + response.response.docs[i].headline.main + "</button></div></div>";
            $(".buttonAppendHere").html(thisHTML);
        };

                $(".optionButtonNews").on("click", function () {
                if(displayArray.length === 2){ alert("Please clear the box")}
                else{
                var currentVal = $(this).val();
                var htmlToAdd = "<div class='col-md-3 currentOptions thumbnail'><button class='x'>X</button><img src=https://static01.nyt.com/" + response.response.docs[currentVal].multimedia[0].url + " /><ul><li><h3>" + response.response.docs[currentVal].headline.main + "</h3></li><li font-size= 11px>" + response.response.docs[currentVal].snippet + "</li><li><a href =" + response.response.docs[currentVal].web_url + " target = '_blank'>Read More</a></ul></div>"; 
                displayArray.push(htmlToAdd);
                render();
                }
            });
        });
    };

    var attractionRender = function(types){
    var attractURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLoca2 + "&radius=10000&rankby=prominence&types=" + types + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto";
    $.ajax({
        url: attractURL,
        method: "GET"
    }).then(function (response) {
        var thisHTML = "";
        for (i = 0; i < 8; i++) {
            thisHTML += "<div class='btn-group-justified'><div class='btn-group'><button class='optionButtonAttract btn btn-primary' value = " + i + ">" + response.results[i].name + "</button></div></div>";
            $(".buttonAppendHere").html(thisHTML);
        };

        $(".optionButtonAttract").on("click", function () {
            if(displayArray.length === 4){ alert("Please clear the box")}
                else{
            var currentVal = $(this).val();
            var htmlToAdd = "<div class='col-md-2 currentOptions thumbnail'><button class='x'>X</button><img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + response.results[currentVal].photos[0].photo_reference + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto alt='picture' /><ul><li>" + response.results[currentVal].name + "</li><li>" + response.results[currentVal].vicinity + "</li><li><a target=_blank href=https://www.google.com/maps/place/" + response.results[currentVal].vicinity.replace(/ /g, "+") + ">Google Map Location</a></li></ul>";
                displayArray.push(htmlToAdd);
                render();
        };
    });
});
};


var reset = function(){
    displayArray = [];
    render();
    $(".buttonAppendHere").html("");
}

var render = function(){
    $(".currentOptions").remove();
    for(var i=0;i<displayArray.length;i++){
        var obj = $.parseHTML(displayArray[i]);
        $(obj).children("button").val(i);
        $(".appendHere").append(obj);
        $(".appendHere").hide().fadeIn("slow");
    }
    
};

$(document).on("click",".x", function(){
    current = $(this).val();
    displayArray.splice(current,1);
    render();          
}); 