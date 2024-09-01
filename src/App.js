import { useState } from 'react';
import Search from './components/search';
import Weather from './components/weather';
import { WEATHER_API, API_KEY } from './weather-api';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const { lat, lon } = location;
      const response = await fetch(`${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const handleSelect = (selectedLocation) => {
    if (selectedLocation) {
      fetchWeather(selectedLocation);
    }
  };


  return (
    <div className="App">
      <div className="App-header">
        <Search onSelect={handleSelect}/>
        {weather && <Weather data={weather} />}
      </div>
    </div>
  );
}

export default App;
