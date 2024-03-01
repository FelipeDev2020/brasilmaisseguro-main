//import { useEffect, useState } from "react"

/*
function UseCep(cep) {
  const [cepDados, setCepDados] = useState([])

  //Busca municípios quando um estado é selecionado
  useEffect(() => {
    if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => setCepDados(data));
    }
  }, [cep]);

  return cepDados
}
*/

async function UseCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return data;
}

export default UseCep
