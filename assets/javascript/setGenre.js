/**
 * Clicking on the food icon will change the values and text of the genre buttons for food. The information div will then transition display.
 * @callback
 */
$(document).on("click", "#food_icon", function () {
    reset();
    if($(".information").hide()){   
        $(".information").fadeIn("slow")   
    }
    else if($(".information").show()){
        $(".information").fadeOut("slow")
    }
    $(".buttonG1").val(1).text("$");
    $(".buttonG2").val(2).text("$$");
    $(".buttonG3").val(3).text("$$$");
    $(".buttonG4").val(4).text("$$$$");
    $(".information").fadeIn();
});

/**
 * Clicking on the travel icon will change the values and text of the genre buttons for travel. The information div will then transition display.
 * @callback
 */
$(document).on("click", "#travel_icon", function () {
    reset();
    if($(".information").hide()){   
        $(".information").fadeIn("slow")   
    }
    else if($(".information").show()){
        $(".information").fadeOut("slow")
    }
    $(".buttonG1").val(cityName).text("Map");
    $(".buttonG2").val("transportation+station+in+" + cityName).text("Transport");
    $(".buttonG3").val("hotel+" + cityName).text("Hotels");
    $(".buttonG4").val(cityName).text("News");
    $(".information").fadeIn();
});

/**
 * Clicking on the concerts icon will change the values and text of the genre buttons for concerts. The information div will then transition display.
 * @callback
 */
$(document).on("click", "#concerts_icon", function () {
    reset();
    if($(".information").hide()){   
        $(".information").fadeIn("slow")   
    }
    else if($(".information").show()){
        $(".information").fadeOut("slow")
    }
    $(".buttonG1").val("Rock").text("Rock");
    $(".buttonG2").val("Country").text("Country");
    $(".buttonG3").val("Musical").text("Musical");
    $(".buttonG4").val("Sports").text("Sports");
    $(".information").fadeIn();
});

/**
 * Clicking on the landmarks icon will change the values and text of the genre buttons for landmarks. The information div will then transition display.
 * @callback
 */
$(document).on("click", "#landmark_icon", function () {
    reset();
    if($(".information").hide()){   
        $(".information").fadeIn("slow")   
    }
    else if($(".information").show()){
        $(".information").fadeOut("slow")
    }
    $(".buttonG1").val("shopping_mall|shoe_store|supermarket|clothing_store|department_store").text("Shopping");
    $(".buttonG2").val("museum|art_gallery|aquarium").text("Museums");
    $(".buttonG3").val("park").text("Parks");
    $(".buttonG4").val("movie_theater").text("Theaters");
    $(".information").fadeIn();
});

/**
 * Clicking on a genre button will pull the value and text of that button and compare it to a long if statement to see which render function to call. Once finding which information to show, runs the render function with genre as the argument.
 * @callback
 */
$(document).on("click", ".genre_btn", function () {
            var genre = $(this).val();
            var text = $(this).text();
            reset();
            $(".currentOptions").remove();
            if ($.inArray(genre, ["1", "2", "3", "4"]) >= 0) {
                foodRender(genre);  }

            else if (genre === "transportation+station+in+"+cityName) {
                stationsRender(genre);    }
            
            else if (genre === "hotel+"+cityName){
                hotelRender(genre);     }
            
            else if (genre === cityName && text === "Map"){
                mapRender(genre);      }

            else if (genre === cityName && text === "News"){
                newsRender(genre);     }
            
            else if ($.inArray(genre, ["shopping_mall|shoe_store|supermarket|clothing_store|department_store", "museum|art_gallery|aquarium", "park", "movie_theater"]) >= 0) {
                attractionRender(genre);    }

            else if ($.inArray(genre, ["Rock", "Country", "Musical", "Sports"]) >= 0) {
                concertRender(genre);   }
});