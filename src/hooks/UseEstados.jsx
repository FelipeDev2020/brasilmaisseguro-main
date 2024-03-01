import { useEffect, useState } from "react"

function UseEstados() {
  const [estados, setEstados] = useState([])

  //Busca a lista de estados da API do IBGE
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(response => response.json())
      .then(data => setEstados(data))
  }, [])

  return estados
}

export default UseEstados
