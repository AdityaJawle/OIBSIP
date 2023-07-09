function convertTemperature() {
      var temperatureInput = document.getElementById("temperature");
      var unitToSelect = document.getElementById("unitTo");
      var resultOutput = document.getElementById("result");

      var temperature = parseFloat(temperatureInput.value);
      var unitTo = unitToSelect.value;
      var unitFrom;

      var convertedTemperature;

      if (unitTo === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) + 32;
        unitFrom = "celsius";
      } else {
        convertedTemperature = (temperature - 32) * 5 / 9;
        unitFrom = "fahrenheit";
      }

      resultOutput.value = temperature + "°" + unitFrom.charAt(0).toUpperCase() + unitFrom.slice(1) +
        " = " + convertedTemperature.toFixed(2) + "°" + unitTo.charAt(0).toUpperCase() + unitTo.slice(1);
    }
