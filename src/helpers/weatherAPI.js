const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (cidade) => {
  const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${cidade}`;
  try {
    const resposta = await fetch(URL);
    const info = await resposta.json();
    if (info.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return info;
  } catch (error) {
    console.error('erro: ', error);
    return [];
  }
};

export const getWeatherByCity = async (cityURL) => {
  const URL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

  const resposta = await fetch(URL);
  const info = await resposta.json();
  return {
    temp: info.current.temp_c,
    condition: info.current.condition.text,
    icon: info.current.condition.icon,
  };
};
