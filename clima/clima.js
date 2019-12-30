const axios = require('axios');

const getClima = async (lat, lng) => {

        const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4dd628f3e84c8c4568261f8fb7cbd7b2&units=metric`);
        return resp.data.main.temp;
}

module.exports= {
    getClima
}