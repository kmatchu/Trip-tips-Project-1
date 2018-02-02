var hideDivs = function(){
    $(".food_container").hide();
    $(".monument_container").hide();
    $(".news_container").hide();
    $(".concert_container").hide();
    $("#weather").hide();

    console.log("hide");
}

var foodDivHider = function(){
    if($(".monument_container").show()){
        $(".monument_container").hide();
    }
    if($(".news_container").show()){
        $(".news_container").hide()
    }
    if($(".concert_container").show()){
        $(".concert_container").hide();
    }
}

var transportDivHider = function(){
    if($(".monument_container").show()){
        $(".monument_container").hide();
    }
    if($(".food_container").show()){
        $(".food_container").hide()
    }
    if($(".concert_container").show()){
        $(".concert_container").hide();
    }
}

var concertDivHider = function(){
    if($(".monument_container").show()){
        $(".monument_container").hide();
    }
    if($(".food_container").show()){
        $(".food_container").hide()
    }
    if($(".news_container").show()){
        $(".news_container").hide();
    }
}

var landmarkDivHider = function(){
    if($(".concert_container").show()){
        $(".concert_container").hide();
    }
    if($(".food_container").show()){
        $(".food_container").hide()
    }
    if($(".news_container").show()){
        $(".news_container").hide();
    }
}



