import { useEffect, useState } from "react"

function UseDistritos(municipioSelecionado) {
  const [distritos, setDistritos] = useState([])

  //Busca distritos quando um município é selecionado
  useEffect(() => {
    if (municipioSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipioSelecionado}/distritos`)
        .then(response => response.json())
        .then(data => setDistritos(data));
    }
  }, [municipioSelecionado]);

  return distritos
}

export default UseDistritos