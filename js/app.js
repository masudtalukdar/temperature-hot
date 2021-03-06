const API_KEY = `fab10b8da9138d998a8a4d3e231b475f`;
const searchTemperature = () => {
  const city = document.getElementById('city-name').value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText('city', temperature.name);
  if (temperature.name === undefined) {
    alert("don't have data!");
  }
  setInnerText('temperature', temperature.main.temp);
  setInnerText('condition', temperature.weather[0].main);
  setInnerText('humidity', temperature.main.humidity);

  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('weather-icon');
  imgIcon.setAttribute('src', url);
};
