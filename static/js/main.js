$(document).ready(function(){
    $(".what1,.d-description").click(function(){
        $(".what1").toggle();
        $(".d-description").toggle();
    })
    $(".what2, .dev-des").click(function(){
        $(".what2").toggle();
        $(".dev-des").toggle();
    })
    $(".what3, .pro-des").click(function(){
        $(".what3").slideDown().toggle();
        $(".pro-des").slideUp().toggle();
    })
})
$(document).ready(function(){
    $(".hov").hover(function(){
        $(this).children(".bac").fadeToggle(1000, "linear");
    })
})