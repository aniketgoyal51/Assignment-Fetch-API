//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
var dayArr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

var montharr=['January','February','March','April','May','June','July','August','September','October','November','December']

fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0c0404825022be0d52b563e044d5673d')
.then((data=>data.json()))
.then((parsedata)=>{console.log(parsedata)

  const state=document.getElementById('state')
  state.innerHTML=parsedata.name+', '+parsedata.sys.country

  var date=document.getElementById('date')
  var datedata=new Date(parsedata.dt *1000)
  const day = datedata.getDay();
  const month=datedata.getMonth()
  date.textContent= dayArr[day-1] + " " + datedata.getDate() + " " + montharr[month] + ' ' + datedata.getFullYear();

  var avgtemp=document.getElementById('temp')
  temp=Math.floor((parsedata.main.temp)-273)
  avgtemp.innerHTML=temp

  var weather=document.getElementById('weather')
  weather.innerHTML=parsedata.weather[0].description

  var temprange=document.getElementById('temprange')
  mintemp=Math.floor((parsedata.main.temp_min)-273)
  maxtemp=Math.floor((parsedata.main.temp_max)-273)
  temprange.innerHTML=`${mintemp}&degc / ${maxtemp}&degc`
})

