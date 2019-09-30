class Weather {
    constructor(city, country) {
        this.apiKey = 'ab5065898b2659cc5e2f07011f6729aa';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location:
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}