document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');
    
    if (temperatureInput === '') {
        resultElement.textContent = 'Please enter a valid temperature.';
        return;
    }

    let temperature = parseFloat(temperatureInput);
    let convertedTemp;

    if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemp = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemp = temperature + 273.15;
        } else {
            convertedTemp = temperature;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemp = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemp = (temperature - 32) * 5/9 + 273.15;
        } else {
            convertedTemp = temperature;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemp = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = (temperature - 273.15) * 9/5 + 32;
        } else {
            convertedTemp = temperature;
        }
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${getUnitSymbol(toUnit)}`;
}

function getUnitSymbol(unit) {
    switch (unit) {
        case 'celsius': return '°C';
        case 'fahrenheit': return '°F';
        case 'kelvin': return 'K';
        default: return '';
    }
}
