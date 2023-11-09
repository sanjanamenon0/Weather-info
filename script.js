const apiKey = 'enter_your_api_key_from_weatherstack'; 
const baseUrl = 'http://api.weatherstack.com/current';

async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');

    if (city) {
        const apiUrl = `${baseUrl}?access_key=${apiKey}&query=${city}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.success === false) {
                weatherInfo.innerHTML = 'City not found';
            } else {
                const location = data.location.name;
                const temperature = data.current.temperature;
                const description = data.current.weather_descriptions[0];


                weatherInfo.innerHTML = `
                    <h2>${location}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                    ;
            }
        } catch (error) {
            weatherInfo.innerHTML = 'Error fetching data';
        }
    } else {
        weatherInfo.innerHTML = 'Please enter a city';
    }
}
