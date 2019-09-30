// Init storage
const storage = new Storage();

// Get stored location data.
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI:
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',
    (e) => {
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        // Set location in LS:
        storage.setLocationData(city, country);
        // weather.changeLocation('Miami', 'US');

        // Get and display weather:
        getWeather();

        // Close modal:
        $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            //console.log(results)
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        let myCelcius = 0;
        let myCelciusRounded = 0;

        myCelcius = kelvin-273.15;
        myCelciusRounded = Math.round(myCelcius);
        return myCelciusRounded;
    }
}

function MetresPerSecondToMilesPerHour(mps) {
    let milesPerSecond = 0;
    let milesPerHour = 0;
    let milesPerHourRounded = 0;

    milesPerSecond = mps / 1609.34;
    milesPerHour = milesPerSecond * 3600;
    milesPerHourRounded = Math.round(milesPerHour);
    return milesPerHourRounded;
}

function windDirectionFromDegrees(deg) {
    if (deg <= 44) {
        return 'North';
    } else if (deg <= 89) {
        return 'Northeasterly'
    } else if (deg <= 134) {
        return 'Easterly'
    } else if (deg <= 179) {
        return 'Southeasterly'
    } else if (deg <= 224) {
        return 'South'
    } else if (deg <= 269) {
        return 'Southwesterly'
    } else if (deg <= 314) {
        return 'Westerly'
    } else  {
        return 'Northwesterly'
    }
}

