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
                // console.log(currentVal);
                // console.log(response._embedded.events[currentVal].name);
                // var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " target='_blank'>Website</a></li></ul>"
                var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li> <a href= https://www.google.com/maps/search/" + formatWebsite + " target='_blank'>Website</a></li></ul>"
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
            // $(".tempF").html(response.current_observation.temp_f + "&#176");
            // $(".weathCondition").html("<img src=" + response.current_observation.icon_url + ">");
            $(".optionT").on("click", function () {

                var currentVal = $(this).val();
                var website = response.results[currentVal].name;
                console.log(response.results[currentVal].name);
                var formatWebsite = website.replace(/ /g, "+");
                console.log(formatWebsite);
                // console.log(currentVal);
                // console.log(response._embedded.events[currentVal].name);
                // var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li> <a href= https://www.google.com/maps/search/" + response.results[currentVal].name + " target='_blank'>Website</a></li></ul>"
                var htmlToAdd = "<ul><li>" + response.results[currentVal].name + "</li><li> <a href= https://www.google.com/maps/search/" + formatWebsite + " target='_blank'>Website</a></li></ul>"
                $("#currentTravel").html(htmlToAdd);
            });
});
});