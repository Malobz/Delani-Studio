$(document).ready(function() {
    $(".design").click(function() {
        $(".d-description").toggle();
        $(".desg").toggle();
    });

    $(".dev").click(function() {
        $(".dev-des").toggle();
        $(".devl").toggle();
    });
    $(".product").click(function() {
        $(".pro-des").toggle();
        $(".prd").toggle();
    });
});
$(document).ready(function() {
    $(".imge").hover(function() {
        $(this).children(".imge1").fadeToggle(1000, "linear");
    })
})

$(document).ready(function() {
    $(".btn").click(function() {
        var name1 = $("#namee").val();
        var email = $("#emaile").val();
        var textA = $("#comment").val();
        if (name1 == '' || email == '' || textA == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + name1 + ' We have received your message. Thank you for reaching out to us.');
        }
    })
})