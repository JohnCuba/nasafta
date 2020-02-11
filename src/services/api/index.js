export const getNeoArray = (date) => {
  const URL = 'https://api.nasa.gov/neo/rest/v1/feed';
  const API_KEY = 'API_KEY=DEMO_KEY';
  const API_DATE = `start_date=${date}&end_date=${date}`;
  try {
    const response = fetch(`${URL}?${API_DATE}&${API_KEY}`);
    if (response.status === 200) {
      const json = response.json();
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
};
