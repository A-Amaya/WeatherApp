

//CAPTURAR LOS ELEMNTOS DEL DOM PARA MODIFICARLOS POSTERIORMENTE//
let searchForm = document.getElementById("search__submit");
let searchInput = document.getElementById("search__input");
let weatherIcon = document.getElementById("weather__icon");

let weatherIconDay = document.getElementById("weather__icon-day1");
let weatherIconDay2 = document.getElementById("weather__icon-day2");
let weatherIconDay3 = document.getElementById("weather__icon-day3");
let weatherIconDay4 = document.getElementById("weather__icon-day4");
let weatherIconDay5 = document.getElementById("weather__icon-day5");

let date = document.getElementById("date");
let tempreatureDegress = document.getElementById("degreeNumber");
let temperatureDescription = document.getElementById("temperatureDescription");
let city = document.getElementById("city");
//let cityResult = document.getElementById("cityResult");
let velocity = document.getElementById("speed");
let humidity = document.getElementById("humidityPercentage");
let degreeWind = document.getElementById("degreeWind");
let pressureTemp = document.getElementById("pressureTemp");
let temMaxMor = document.getElementById("temMaxMor");
let temMinMor = document.getElementById("temMinMor");

let temMaxDay2 = document.getElementById("temMaxDay2");
let temMinDay2 = document.getElementById("temMinDay2");
let dateDay2 = document.getElementById("dateDay2");

let temMaxDay3 = document.getElementById("temMaxDay3");
let temMinDay3 = document.getElementById("temMinDay3");
let dateDay3 = document.getElementById("dateDay3");

let temMaxDay4 = document.getElementById("temMaxDay4");
let temMinDay4 = document.getElementById("temMinDay4");
let dateDay4 = document.getElementById("dateDay4");

let temMaxDay5 = document.getElementById("temMaxDay5");
let temMinDay5 = document.getElementById("temMinDay5");
let dateDay5 = document.getElementById("dateDay5");



//Day 2 date
const displayDateDayTwo = (obj)=>{
    let dateDayOne = new Date(obj.list[10].dt*1000).toLocaleString("es-ES",{
        dateStyle: "short"
    });
    dateDay2.textContent = `${dateDayOne}`;
}

//Day 3 date
const displayDateDayThree = (obj)=>{
    let dateDayThree = new Date(obj.list[18].dt*1000).toLocaleString("es-ES",{
        dateStyle: "short"
    });
    dateDay3.textContent = `${dateDayThree}`;
}


//Day 4 date
const displayDateDayFour = (obj)=>{
    let dateDayFour = new Date(obj.list[26].dt*1000).toLocaleString("es-ES",{
        dateStyle: "short"
    });
    dateDay4.textContent = `${dateDayFour}`;
}


//Day 5 date
const displayDateDayFive = (obj)=>{
    let dateDayFive = new Date(obj.list[34].dt*1000).toLocaleString("es-ES",{
        dateStyle: "short"
    });
    dateDay5.textContent = `${dateDayFive}`;
}


//Date consult day
const displayDate = (obj)=>{
    let dateSpanish = new Date(obj.dt*1000).toLocaleString("es-ES", {
        timeStyle: "short",
        dateStyle: "long"
    });
    date.textContent = `${dateSpanish}`;
}



//Teperaature 
const displayDataDay=(obj)=>{
    //Day 1
    temMaxMor.textContent = Math.floor(obj.list[1].main.temp_max);
    temMinMor.textContent = Math.floor(obj.list[1].main.temp_min);
    let icon1 = obj.list[1].weather[0].icon; 
    weatherIconDay.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon1}.png'></img>`;
    
    //day2
    temMaxDay2.textContent = Math.floor(obj.list[10].main.temp_max);
    temMinDay2.textContent = Math.floor(obj.list[10].main.temp_min);
    let icon2 = obj.list[10].weather[0].icon; 
    weatherIconDay2.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon2}.png'></img>`;

    //day 3
    temMaxDay3.textContent = Math.floor(obj.list[18].main.temp_max);
    temMinDay3.textContent = Math.floor(obj.list[18].main.temp_min);
    let icon3 = obj.list[18].weather[0].icon; 
    weatherIconDay3.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon3}.png'></img>`;

    //day 4
    temMaxDay4.textContent = Math.floor(obj.list[26].main.temp_max);
    temMinDay4.textContent = Math.floor(obj.list[26].main.temp_min);
    let icon4 = obj.list[26].weather[0].icon; 
    weatherIconDay4.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon4}.png'></img>`;

    //day 5
    temMaxDay5.textContent = Math.floor(obj.list[34].main.temp_max);
    temMinDay5.textContent = Math.floor(obj.list[34].main.temp_min);
    let icon5 = obj.list[34].weather[0].icon; 
    weatherIconDay5.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon5}.png'></img>`;
} 



const displayData=(obj)=>{

    tempreatureDegress.textContent = Math.floor(obj.main.temp);
    temperatureDescription.textContent = obj.weather[0].description.charAt(0).toUpperCase()+
    obj.weather[0].description.slice(1);
    city.textContent = obj.name;
    //cityResult.textContent = obj.name;
    velocity.textContent = obj.wind.speed;
    humidity.textContent = obj.main.humidity;
    degreeWind.textContent = obj.wind.deg;
    pressureTemp.textContent = obj.main.pressure;

    const icon = obj.weather[0].icon;
    weatherIcon.innerHTML = `<img class="align__img-weather" src='icons/${icon}.png'></img>`;
}     

//DECLARAR GETWEATHERDATA//
const getWeatherData = async (city)=>{
//HACER REQUEST A LA API OBTENER EL OBJETO QUE CONTIENE LOS DATOS//
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&units=metric&appid=c5dcd6719c49a81d391864c8017b5908`);
const resDay = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=sp&units=metric&appid=c5dcd6719c49a81d391864c8017b5908`);

const data = await res.json();
const dataDay = await resDay.json();

console.log(dataDay);
console.log(data);
//FETCH//
displayDate(data);

displayDateDayTwo(dataDay);
displayDateDayThree(dataDay);
displayDateDayFour(dataDay);
displayDateDayFive(dataDay);

//MOSTRAR LOS DATOS//
displayData(data);
displayDataDay(dataDay)
    
}


searchForm.addEventListener("submit" , e=>{
    e.preventDefault();
    getWeatherData(searchInput.value)
})

//AL CARGAR LA PAGINA NOS CARGA UNA CIUDAD PREDEFINIDA//
window.onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
    navigator.geolocation.getCurrentPosition(fetchDataProx);
}


//My location (data)//
const api_Key = "c5dcd6719c49a81d391864c8017b5908";

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=sp&appid=${api_Key}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        speed: data.wind.speed,
        humidityPercentage: data.main.humidity,
        degreeWind: data.wind.deg,
        pressureTemp: data.main.pressure,
        degreeNumber: Math.floor(data.main.temp),
        temperatureDescription: data.weather[0].description.charAt(0).toUpperCase()+data.weather[0].description.slice(1),
        city: data.name,

    }
    const icon = data.weather[0].icon;
    weatherIcon.innerHTML = `<img class="align__img-weather" src='icons/${icon}.png'></img>`;
    dateLocation(data);

    Object.keys(weatherData).forEach( key =>{
        document.getElementById(key).textContent = weatherData[key];
    });
}

//My location (date)
const dateLocation = (obj)=>{
    let dateSpanish = new Date(obj.dt*1000).toLocaleString("es-ES", {
        timeStyle: "short",
        dateStyle: "long"
    });
    date.textContent = `${dateSpanish}`;
}



//proximos dias//
const fetchDataProx = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&units=metric&lon=${longitude}&appid=${api_Key}`)
    .then(response => response.json())
    .then(data => setWeatherDay(data))
}

const setWeatherDay = data => {
    console.log(data);
    const weatherDay = {
        temMaxMor: Math.floor(data.list[1].main.temp_max),
        temMinMor: Math.floor(data.list[1].main.temp_min),
        

        temMaxDay2: Math.floor(data.list[10].main.temp_max),
        temMinDay2: Math.floor(data.list[10].main.temp_min),

        temMaxDay3: Math.floor(data.list[18].main.temp_max),
        temMinDay3: Math.floor(data.list[18].main.temp_min),

        temMaxDay4: Math.floor(data.list[26].main.temp_max),
        temMinDay4: Math.floor(data.list[26].main.temp_min),

        temMaxDay5: Math.floor(data.list[34].main.temp_max),
        temMinDay5: Math.floor(data.list[34].main.temp_min),
    }
    const icon1 = data.list[1].weather[0].icon;
    weatherIconDay.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon1}.png'></img>`;
    
    const icon2 = data.list[10].weather[0].icon;
    weatherIconDay2.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon2}.png'></img>`;
    
    const icon3 = data.list[18].weather[0].icon;
    weatherIconDay3.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon3}.png'></img>`;
    
    const icon4 = data.list[26].weather[0].icon;
    weatherIconDay4.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon4}.png'></img>`;
    
    const icon5 = data.list[34].weather[0].icon;
    weatherIconDay5.innerHTML = `<img class="days align__img-weather-day" src='icons/${icon5}.png'></img>`;
    

    Day2(data); Day3(data); Day4(data); Day5(data);

    Object.keys(weatherDay).forEach( key =>{
        document.getElementById(key).textContent = weatherDay[key];
    });
}

//My location (date) 1
const Day2 = (obj)=>{
    let dateSpanish = new Date(obj.list[10].dt*1000).toLocaleString("es-ES", {
        dateStyle: "short"
    });
    dateDay2.textContent = `${dateSpanish}`;
}

//My location (date) 1
const Day3 = (obj)=>{
    let dateSpanish = new Date(obj.list[18].dt*1000).toLocaleString("es-ES", {
        dateStyle: "short"
    });
    dateDay3.textContent = `${dateSpanish}`;
}

//My location (date) 1
const Day4 = (obj)=>{
    let dateSpanish = new Date(obj.list[26].dt*1000).toLocaleString("es-ES", {
        dateStyle: "short"
    });
    dateDay4.textContent = `${dateSpanish}`;
}

//My location (date) 1
const Day5 = (obj)=>{
    let dateSpanish = new Date(obj.list[34].dt*1000).toLocaleString("es-ES", {
        dateStyle: "short"
    });
    dateDay5.textContent = `${dateSpanish}`;
}





