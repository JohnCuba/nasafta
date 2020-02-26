export const getNeoArray = async (date, methods) => {
  const URL = 'https://api.nasa.gov/neo/rest/v1/feed';
  const API_KEY = 'API_KEY=c1KA1Xb6Socj3dDqcVTx1gaNglghR5rRvYAZeK1g';
  const API_DATE = `start_date=${date}&end_date=${date}`;
  try {
    const response = await fetch(`${URL}?${API_DATE}&${API_KEY}`);
    if (response.status == 200) {
      const json = await response.json();
      methods.callbackOk(json.near_earth_objects[date])
    }
  } catch (error) {
    console.log(error);
  }
};

// https://in-space.ru/asteroid/?n=2019-TK6
