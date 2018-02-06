$(".transpo").on("click", function () {
    console.log("Transpo working");
    var googleTranspo = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=transportation+station+in+" + cityName + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    console.log(googleTranspo);    
    $.ajax({
        url: googleTranspo,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 4; i++){
            $("#optionT"+i).text(response.results[i].name);};
            // $(".tempF").html(response.current_observation.temp_f + "&#176");
            // $(".weathCondition").html("<img src=" + response.current_observation.icon_url + ">");
            $(".optionT").on("click", function () {

                var currentVal = $(this).val();
                var website = response.results[currentVal].name;
                console.log(response.results[currentVal].name);
                var formatWebsite = website.replace(/ /g, "+");
                console.log(formatWebsite);
                
                var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + formatWebsite + " target='_blank'>Website</a></li></ul>"
                $("#currentTravel").html(htmlToAdd);
            });
});
});

$(".hotels").on("click", function () {
    console.log("Transpo working");
    var googleHotel = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotel+" + cityName + "&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    console.log(googleHotel);    
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
               
                console.log(formatWebsite); var formatWebsite = website.replace(/ /g, "+");
               
                var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li>" +response.results[currentVal].formatted_address +"</li><li> <a href= https://www.google.com/maps/search/" + formatWebsite + " target='_blank'>Website</a></li></ul>"
                $("#currentTravel").html(htmlToAdd);
            });
});
});
$(".maps").on("click", function () {
    console.log("Maps working");
    console.log(city);
    var mapCity = city.replace(/ /g, "+");
    var googleMap = "https://maps.googleapis.com/maps/api/staticmap?center=" + mapCity + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA5S3HY_HcD1tcwYlCjWqC0HpZCkGs0_HM";
    console.log(googleMap);    
            var htmlToAdd = "<img src=" + googleMap + " alt=city map /><a href=" + googleMap + "target='_blank'></a>";
                $("#currentTravel").html(htmlToAdd);
            });

            $(".news").on("click", function () {
                console.log("News working");
                var nytLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=9bea106de39c43339a278e2b55fad5ef&q=" + cityName;
                console.log(nytLink);    
                $.ajax({
                    url: nytLink,
                    method: "GET"
                }).then(function (response) {
                    for (var i = 0; i < 4; i++){
                        console.log(response);
                        $("#optionT"+i).text(response.response.docs[i].headline.main);
                    };
                            
                            $(".optionT").on("click", function () {
                            var currentVal = $(this).val();
                            console.log(response.response.docs[currentVal].snippet);
                            console.log(currentVal);
                            
                            
                            var headline = response.response.docs[currentVal].headline.main;
                            var brief = response.response.docs[currentVal].snippet;
                            var newsURL = response.response.docs[currentVal].web_url;
                            
                            var htmlToAdd = "<ul><li> <a href =" + newsURL + " target = '_blank'>" + headline + "</a></li>" + "<li>" + brief + "</li></ul>"; 
                            
                            
                            $("#currentTravel").html(htmlToAdd);
                        });
            });
            });