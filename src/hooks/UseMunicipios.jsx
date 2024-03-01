import { useEffect, useState } from "react"

function UseMunicipios(estadoSelecionado) {
  const [municipios, setMunicipios] = useState([])

  //Busca municípios quando um estado é selecionado
  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then(response => response.json())
        .then(data => setMunicipios(data));
    }
  }, [estadoSelecionado]);

  return municipios
}

export default UseMunicipios
