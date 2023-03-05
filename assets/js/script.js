var searchButton = $(".searchButton");

var apiKey = "a645e448d6e973e7ad29672398979fba";

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i)
   var cityName = $(".list-group").addClass("list-group-item");
   cityName.append("<li>" + city + "</li>");
}

var keyCount = 0;

