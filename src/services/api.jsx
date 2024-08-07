export const fetchEstrelas = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./estrelas.json');
    const data = await response.json();
    return data;
    
  
  };
  