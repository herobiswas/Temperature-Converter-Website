function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelector = document.getElementById('unitSelector').value;
    let result = '';

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    switch (unitSelector) {
        case 'celsius':
            result = `${temperatureInput} °C is ${celsiusToFahrenheit(temperatureInput)} °F and ${celsiusToKelvin(temperatureInput)} K`;
            break;
        case 'fahrenheit':
            result = `${temperatureInput} °F is ${fahrenheitToCelsius(temperatureInput)} °C and ${fahrenheitToKelvin(temperatureInput)} K`;
            break;
        case 'kelvin':
            result = `${temperatureInput} K is ${kelvinToCelsius(temperatureInput)} °C and ${kelvinToFahrenheit(temperatureInput)} °F`;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = result;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToFahrenheit(kelvin) {
    return kelvin * 9/5 - 459.67;
}
