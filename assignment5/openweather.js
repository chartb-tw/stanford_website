const apiKey = "8d9cba8257776ff40290c7e97dda570c";

function getWeather() {
  const docForm = document.forms["weather-form"];
  const urlTo = `https://api.openweathermap.org/data/2.5/weather?zip=${docForm["zip-code"].value},us&units=imperial&APPID=${apiKey}`;

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const resp = JSON.parse(this.responseText);
    if (resp["cod"] == 200) {
      docForm[
        "weather-area"
      ].value += `${resp.name}: ${resp.main.temp} (Feels like ${resp.main["feels_like"]}) \n`;
    }
  };
  xhttp.open("GET", urlTo, true);
  xhttp.send();
}

function clearForm() {
  const docForm = document.forms["weather-form"];
  docForm["zip-code"].value = "";
  docForm["weather-area"].value = "";
}
