// Documentation: https://github.com/builderLabs/Yelp-Fusion-JavaScript
$(function() {
    // Get my Facebook API key from Local Storage
    var token = localStorage.getItem("yelpToken");

    $("#makeCall").click(function() {
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=boston",
            success: function(data, status) {
                $(".api-results").append("<p>Total number of results from API: " + data.total + ".</p><p>Check your console.</p>");
                return console.log("The returned data", data);
            },
            beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + token); }
        });
    });

});