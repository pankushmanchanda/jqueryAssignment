$(function() {
    $('#btnSearch').on("click", function() {
        apiCall();
    });

    function apiCall() {
        debugger;

        var title = $('#txtSearch').val();
        $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + title + "&appid=f20e1627db6b44f68298e4681f048e59", function(data) {
            console.log(data);
            getData(data);
        });
    };

    function getData(data) {
        debugger;
        $('#data').html(' ');
        var iconCode = data.list[0].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        for (var i = 0; i < data.list.length; i = i + 8) {
            $('#data').append('<div class="container-fluid well fixed" style="margin-right:30%; margin-left:30%; margin-top: 50px;"><p id="location">' + data.city.name + '</p><p id="weather"><b>Weather Status:</b> ' + data.list[i].weather[0].description + '<img src="' + iconUrl + '"></p><p id="temperature"><b>Temperature:</b> ' + Math.round(data.list[i].main.temp) + '&deg;' + '</p></div>');
        }
        //     $('#temperature').html("<b>Temperature:</b> " + Math.round(data.list[0].main.temp) + '&deg;');
        //     $('#location').html(data.city.name);
        //     //button to convert C and F, it must have two functions


        //     $("#weather").html("<b>Weather Status:</b> " + data.list[0].weather[0].description + "<img src='" + iconUrl + "'>");
        // 
    }
    // $("#F").click(function() {
    //     $('#temperature').html("<b>Temperature:</b> " + (Math.round(data.list[0].main.temp) * (9 / 5) + 32) + '&deg;');
    // });

    // $("#C").click(function() {
    //     $('#temperature').html("<b>Temperature:</b> " + Math.round(data.main.temp) + '&deg;');

    // });
});