import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY, 
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
    try {
      if (lat && lng) {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: { 
            lat, 
            lon: lng, 
            appid:  process.env.REACT_APP_WEATHER_API_KEY 
          },
        });
        console.log("Weather data", data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  