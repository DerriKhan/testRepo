/*card id's grabbed and turned into variables--------------------------------------------------------------------------------------------------------------------------------------------*/
var darkCard = document.querySelector('#dark-text')
var lightCard = document.querySelector('#light-text')
var inspireCard = document.querySelector('#inspire-text')
var despireCard = document.querySelector('#despire-text')

/*when button gets clicked quote will pop up in correspondig cards-----------------------------------------------------------------------------------------------------------------------*/
document.getElementById("lightButton").addEventListener("click", lightJoke);
function lightJoke() {
var jokeLight = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart"
fetch(jokeLight)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      lightCard.textContent = ((data.setup) + (" ") + (data.delivery))
    })
}

document.getElementById("darkButton").addEventListener("click", darkJoke);
function darkJoke() {
var jokeDark = "https://v2.jokeapi.dev/joke/Any?&type=twopart"
fetch(jokeDark)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      darkCard.textContent = ((data.setup) + (" ") + (data.delivery))
    })
}

document.getElementById("inspireButton").addEventListener("click", inspire);
function inspire() {
var inspiration = "https://api.goprogram.ai/inspiration"
fetch(inspiration)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      inspireCard.textContent = ((data.quote) + (" ") + (data.author))
    })
}

document.getElementById("despireButton").addEventListener("click", despire);
function despire() {
var despiration = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
fetch(despiration)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      despireCard.textContent = ((data.message) + ("  -Donald Trump"))
    })
}

/*modal funtion---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('.modal').modal();
  $('.modal').modal('open')
});
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// changing theme by button click
// document.getElementById("lightButton").addEventListener("click", themeLight);
// function themeLight('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

// document.getElementById("darkButton").addEventListener("click", themeDark);
// function themeDark('css/dark-theme.css') {
//   $('#color_theme').attr("href", 'css/dark-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/dark-theme.css');
// };

// document.getElementById('css/dark-theme.css').addEventListener("click", themeInspire);
// function themeInspire('css/light-theme.css') {
//   $('#color_theme').attr("href", 'css/light-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/light-theme.css');
// };

// document.getElementById("despireButton").addEventListener("click", themeDespire);
// function themeDespire('css/dark-theme.css') {
//   $('#color_theme').attr("href", 'css/dark-theme.css');
//   document.getElementById('color_theme').removeAttribute('href');
//   document.getElementById('color_theme').setAttribute('href', 'css/dark-theme.css');
// };


// showing card on button click
document.getElementById("lightButton").addEventListener("click", showLight);
function showLight() {
  var lightCard = document.getElementById("light-card");
  if (lightCard.style.display === "none") {
    lightCard.style.display = "block";
  }
}

document.getElementById("darkButton").addEventListener("click", showDark);
function showDark() {
  var darkCard = document.getElementById("dark-card");
  if (darkCard.style.display === "none") {
    darkCard.style.display = "block";
  }
}

document.getElementById("inspireButton").addEventListener("click", showInspire);
function showInspire() {
  var inspireCard = document.getElementById("inspire-card");
  if (inspireCard.style.display === "none") {
    inspireCard.style.display = "block";
  }
}

document.getElementById("despireButton").addEventListener("click", showDespire);
function showDespire() {
  var despireCard = document.getElementById("despire-card");
  if (despireCard.style.display === "none") {
    despireCard.style.display = "block";
  }
}

function setFavorites() {
  var lightFav = localStorage.setItem('lightFav', document.getElementById('#light-text'));
  var darkFav = localStorage.setItem('darkFav', document.getElementById('#dark-text'))
  var inspireFav = localStorage.setItem('inspireFav', document.getElementById('#inspire-text'))
  var despireFav = localStorage.setItem('despireFav', document.getElementById('#despire-text'))

  document.getElementById('fav-quote').value = lightFav
  document.getElementById('fav-quote').value = darkFav
  document.getElementById('fav-quotet').value = inspireFav
  document.getElementById('fav-quote').value = despireFav
  
}