const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (cidade) => {
  const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${cidade}`;
  try {
    const resposta = await fetch(URL);
    const dados = await resposta.json();
    if (dados.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return dados;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
