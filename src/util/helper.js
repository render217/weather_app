function filterFirstConsecutiveDates(dates) {
  const filteredDates = [];

  for (let i = 0; i < dates.length; i++) {
    if (
      i === 0 ||
      dates[i].substring(0, 10) !== dates[i - 1].substring(0, 10)
    ) {
      filteredDates.push(dates[i]);
    }
  }

  return filteredDates;
}

export async function getFiveDaysForecast(data) {
  let list_of_weather_by_time = data["list"];

  let all_time = [];

  // save all the fetched weather time in all_time array;
  for (let i = 0; i < list_of_weather_by_time.length; i++) {
    all_time.push(list_of_weather_by_time[i].dt_txt);
  }
  // console.log(all_time);
  
  // filter the array all_time
  // and get the 5 day time;
  let five_days_time = filterFirstConsecutiveDates(all_time);

  let five_days_weather = [];

  for (let i = 0; i < list_of_weather_by_time.length; i++) {
    if (five_days_time.includes(list_of_weather_by_time[i].dt_txt)) {
      five_days_weather.push(list_of_weather_by_time[i]);
    }
  }

  return { weather_data: five_days_weather.slice(0,five_days_weather.length - 1), city: data["city"] };
}

export function getFormatedDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  let formattedDate;
  if (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    const month = monthsOfYear[inputDate.getMonth()];
    // const year = inputDate.getFullYear();
    formattedDate = `Today, ${month}`;
  } else if (
    inputDate.getDate() === tomorrow.getDate() &&
    inputDate.getMonth() === tomorrow.getMonth() &&
    inputDate.getFullYear() === tomorrow.getFullYear()
  ) {
    formattedDate = "Tomorrow";
  } else {
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const dayOfMonth = inputDate.getDate();
    const month = monthsOfYear[inputDate.getMonth()];

    formattedDate = `${dayOfWeek} ${dayOfMonth}, ${month}`;
  }
  return formattedDate;
}

export function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius.toFixed(2);
}

export function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
}

export function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius.toFixed(2);
}

export function convertMetersToMiles(meters) {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}

export function convertMpsToMph(mps) {
  const mph = mps * 2.23694;
  return mph.toFixed(2);
}

export async function getGeoLocation() {
  if (navigator.geolocation) {
    const position = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return position;
  } else {
    return { position: null };
  }
}

export function getImage(weather_condition){
  const image_type = {
    'Clouds':'/images/HeavyCloud.png',
    'Rain':'/images/HeavyRain.png',
    'Clear':'/images/Clear.png',
    'Thunderstorm':'/images/Thunderstorm.png',
    'Drizzle':'/images/Drizzle.png',
    'Snow':'/images/Snow.png',
    'Hail':'/images/Hail.png',
    'Sleet':'/images/Sleet.png',
    'Snow':'/images/Snow.png'
  }
  if(image_type[weather_condition]){
    return image_type[weather_condition];
  }else{
    return image_type['Clear']
  }
}