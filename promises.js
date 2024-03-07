function getWeather() {
  return new Promise((resolve, reject) => {
    // reject('error!!');
    resolve('sunny day');
  });
}

function getFood() {
  console.log('going out to get food');
}

getWeather()
  .then((weather) => console.log(weather))
  .then(getFood)
  .catch((err) => console.log(err));
