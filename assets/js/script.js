var searchButton = $(".searchButton");

var apiKey = "a645e448d6e973e7ad29672398979fba";

for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i)
   var cityName = $(".list-group").addClass("list-group-item");
   cityName.append("<li>" + city + "</li>");
}

var keyCount = 0;

searchButton.click(function () {
    var searchInput = $(".searchInput").val();
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";

    if (searchInput == "") {
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function (response) {
            var cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<li>" + response.name + "</li>");

            var local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;

            var currentCard = $(".currentCard").append("<div>").addClass("card-body");
            currentCard.empty();
            var currentName = currentCard.append("<p>");
            currentCard.append(currentName);

            var timeUTC = new Date(response.dt * 1000);
            currentName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
            currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);

            var currentTemp = currentName.append("<p>");
            currentName.append(currentTemp);
            currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");

            currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");

            

        })
    }
})