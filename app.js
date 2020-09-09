// init storage
const storage = new LS();
const weatherLocation = storage.getLocalStorage();

//Init weather object and ui and LS
const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

//Event listener
document.addEventListener('DOMContentLoaded', getWeather());
document.getElementById('w-change-button').addEventListener('click', (e) => {
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    if (city.value === '') {
        showAlert();
    } else {
        weather.changeLocation(city.value, country.value);
        getWeather();
        storage.setLocalStorage(city.value, country.value);
        // Close modal
        $('#locModal').modal('hide');
    }
})

function getWeather() {
    weather.getWeather()
        .then(data => ui.displayWeather(data))
        .catch(err => console.log(err));
}

// show alert
function showAlert() {
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.innerHTML = `Please enter a valid location`;

    const modalBody = document.querySelector('.modal-body');
    const modalForm = document.querySelector('#w-form');

    modalBody.insertBefore(div, modalForm);

    setTimeout( () => {
        div.remove();
    },2000)
}