$(".monument").on("click", function () {
    if($(this).val() === "shopping")
    {
        var genre = $(this).val();
        var types = "shopping_mall|shoe_store|supermarket|clothing_store|department_store"
        var monumentAPI = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLoca2 + "&radius=10000&rankby=prominence&types=" + types + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto";
        console.log(monumentAPI);

    }
    else if($(this).val() === "museum")
    {
        var genre = $(this).val();
        var types = "museum|art_gallery|aquarium"
        var monumentAPI = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLoca2 + "&radius=10000&rankby=prominence&types=" + types + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto";
        console.log(monumentAPI);
    }
    else{
        var genre = $(this).val();
        var monumentAPI = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLoca2 + "&radius=10000&rankby=prominence&types=" + genre + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto";
        console.log(monumentAPI);
    }
    var referencephotoID;


    
    $.ajax({
        url: monumentAPI,
        method: "GET"
    }).then(function (response) {
        for (i = 0; i < 4; i++) {
            $("#optionM" + i).text(response.results[i].name);
        };

        $(".optionM").on("click", function () {

            var currentVal = $(this).val();
            var locationString = response.results[currentVal].vicinity;
            referencephotoID = response.results[currentVal].photos[0].photo_reference;
            console.log(locationString);
            console.log(currentVal);
            console.log(response.results[currentVal].name);
            var website = "https://www.google.com/maps/place/" + locationString ;
            var formatWebsite = website.replace(/ /g, "+");
            console.log(formatWebsite);
            var photowebsite = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + referencephotoID + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto"
            var htmlToAdd = "<div class='thumbnail'><ul><li><img src=" + photowebsite + " alt='error' height=100px></li><li>" + response.results[currentVal].name + "</li><li>" + response.results[currentVal].vicinity + "</li><li><a target=_blank href=" + formatWebsite + " class='btn btn-primary' role='button'>Google Map Location</a></li></ul>";

            $("#currentMonument").html(htmlToAdd);
            console.log(referencephotoID);
            // var photowebsite = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + referencephotoID + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto"
            
        });
    });

    

});