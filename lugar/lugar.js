const axios= require('axios');

const getLugarLatLng= async( ubicacion ) => {

    const encodeUrl = encodeURI( ubicacion );
    console.log( encodeUrl );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'x-rapidapi-key': '8aa1647a6amsh91652a5277e69cep1c49a2jsn3c1642c7cb7a'} 
    });

    const resp = await instance.get();
        
    if(resp.data.Results.length === 0){
        throw new Error(`No hat resultado para ${ubicacion}`);
    }

    const data = resp.data.Results[0];
    direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


