// Functie om Celsius naar Fahrenheit om te zetten
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  // Functie om Fahrenheit naar Celsius om te zetten
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  
  // Functie om de gemiddelde temperatuur te berekenen
  function calculateAverageTemperature(temperatures) {
    let total = 0;
    for (let temp of temperatures) {
      total += temp;
    }
    return total / temperatures.length;
  }
  
  // Testcode
  const temps = [20, 25, 30, 22, 18];
  console.log(`Gemiddelde temperatuur: ${calculateAverageTemperature(temps)}°C`);
  console.log(`25°C in Fahrenheit: ${celsiusToFahrenheit(25)}°F`);
  console.log(`77°F in Celsius: ${fahrenheitToCelsius(77)}°C`);
  