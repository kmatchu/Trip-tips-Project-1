$(".transpo").on("click", function () {

    var googleTranspo = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=transportation+station+in+" + cityName + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
   
    $.ajax({
        url: googleTranspo,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 4; i++){
            $("#optionT"+i).text(response.results[i].name);};
            $(".optionT").on("click", function () {

                var currentVal = $(this).val();
                var website = response.results[currentVal].name;

                console.log(response.results[currentVal].name);
                var formatWebsite = website.replace(/ /g, "+");
                console.log(formatWebsite);
         
                var referencephotoID = response.results[currentVal].photos[0].photo_reference;
                var photowebsite = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + referencephotoID + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto"
                var formatWebsite = website.replace(/ /g, "+");
                var htmlToAdd = "<div class='thumbnail'><img src=" + photowebsite + " alt="+ response.results[currentVal].name + " height= 100px /><div class='caption'><h3 id='hotelName'>" + response.results[currentVal].name + "</h3><p id='hotelAddy'>" + response.results[currentVal].formatted_address + "</p><p><a href= 'https://www.google.com/maps/search/" + formatWebsite + "' target='_blank' class='btn btn-primary' role='button'>More Info</a></p></div></div>";
                $("#currentTravel").html(htmlToAdd);
            });
});
});

$(".hotels").on("click", function () {
    var googleHotel = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotel+" + cityName + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    $.ajax({
        url: googleHotel,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 4; i++){
            $("#optionT"+i).text(response.results[i].name);};

            $(".optionT").on("click", function () {

                var currentVal = $(this).val();
                var website = response.results[currentVal].name;

                console.log(response.results[currentVal].name);
               
         
                var referencephotoID = response.results[currentVal].photos[0].photo_reference;
                var photowebsite = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&sensor=false&photoreference=" + referencephotoID + "&key=AIzaSyB-OVCwzm7e1cFAFr9n5HEmLTPySWZSoto"
                var formatWebsite = website.replace(/ /g, "+");
                var htmlToAdd = "<div class='thumbnail'><img src=" + photowebsite + " alt="+ response.results[currentVal].name + " height= 100px /><div class='caption'><h3 id='hotelName'>" + response.results[currentVal].name + "</h3><p id='hotelAddy'>" + response.results[currentVal].formatted_address + "</p><p><a href= 'https://www.google.com/maps/search/" + formatWebsite + "' target='_blank' class='btn btn-primary' role='button'>More Info</a></p></div></div>";

                $("#currentTravel").html(htmlToAdd);
            });
});
});
$(".maps").on("click", function () {
    var mapCity = city.replace(/ /g, "+");
    var googleMap = "https://maps.googleapis.com/maps/api/staticmap?center=" + mapCity + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
   
            var htmlToAdd = "<img src=" + googleMap + " alt=city map /><a href=" + googleMap + "target='_blank'></a>";
                $("#currentTravel").html(htmlToAdd);
            });

            $(".news").on("click", function () {
                var nytLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=9bea106de39c43339a278e2b55fad5ef&q=" + cityName;
                $.ajax({
                    url: nytLink,
                    method: "GET"
                }).then(function (response) {
                    for (var i = 0; i < 4; i++){
                        $("#optionT"+i).text(response.response.docs[i].headline.main);
                    };
                            
                            $(".optionT").on("click", function () {
                            var currentVal = $(this).val();
                                                        
                            var headline = response.response.docs[currentVal].headline.main;
                            var brief = response.response.docs[currentVal].snippet;
                            var newsURL = response.response.docs[currentVal].web_url;
                            var photo = "https://static01.nyt.com/" + response.response.docs[currentVal].multimedia[0].url;
                            
                            
                            var htmlToAdd = "<div class='thumbnail'><img src=" + photo + " alt="+ headline + " height= 100px /><div class='caption'><h3 id='headline'>" + headline + "</h3><p id='brief'>" + brief + "</p><p><a href='" + newsURL + "' target='_blank' class='btn btn-primary' role='button'>Read More</a></p></div></div>";
                                                        
                            $("#currentTravel").html(htmlToAdd);
                        });
            });
            });