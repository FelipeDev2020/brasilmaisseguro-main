// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { IMaskInput } from "react-imask";
import FormControl from 'react-bootstrap/FormControl';
import "./style.css";
import UseEstados from '../../hooks/UseEstados';
import UseMunicipios from '../../hooks/UseMunicipios';
import UseDistritos from '../../hooks/UseDistritos';
import UseCep from '../../hooks/UseCep';

function Relatar() {

  {/* VALIDAÇÃO DOS CAMPOS */ }
  const [validated, setValidated] = useState(false);

  {/* Botão Enviar | Submit */ }
  const handleSubmit = (event) => {

    {/* VALIDAÇÃO DOS CAMPOS */ }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    {/* VALIDAÇÃO DOS CAMPOS */ }

    alert(estadoSelecionado + " " + municipioSelecionado + " " + distritoSelecionado)

  };
  {/* Botão Enviar | Submit */ }

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const handleChangeEstado = (event) => {
    setEstadoSelecionado(event.target.value); 
    const corSelecionada = event.target.value;
    setCorFundoEstado(corSelecionada)
  };
  //console.log(estadoSelecionado);

  const [municipioSelecionado, setMunicipioSelecionado] = useState('');
  const handleChangeMunicipio = (event) => {
    setMunicipioSelecionado(event.target.value); 
    const corSelecionada = event.target.value;
    setCorFundoMunicipio(corSelecionada)
  };
  //console.log(municipioSelecionado);

  const [distritoSelecionado, setDistritoSelecionado] = useState('');
  const handleChangeDistrito = (event) => {
    setDistritoSelecionado(event.target.value);
    const corSelecionada = event.target.value;
    setCorFundoDistrito(corSelecionada)
  };
  //console.log(distritoSelecionado);
 

  const [corFundoTextNumero, setCorFundoTextNumero] = useState('');
  const handleChangeNumero = (event) => {
    const corSelecionada = event.target.value;
    setCorFundoTextNumero(corSelecionada)

    setNumero(event.target.value);
  };

   //Cor de Fundo Form.Select Estado, Municipio e Bairro
   const [corFundoEstado, setCorFundoEstado] = useState('');
   const [corFundoMunicipio, setCorFundoMunicipio] = useState('');
   const [corFundoDistrito, setCorFundoDistrito] = useState('');
 
  //console.log(UseCep('08441260'));

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  //const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");


  function handleChange(e) {
    if (e.target.name === "rua") {
      setLogradouro(e.target.value);
    } else if (e.target.name === "cep") {
      setCep(e.target.value);
    } else if (e.target.name === "estado") {
      setEstado(e.target.value);
    } else if (e.target.name === "cidade") {
      setCidade(e.target.value);
    } else if (e.target.name === "bairro") {
      setBairro(e.target.value);
    }
  }


  function onClick() {
    var cepValor = document.getElementById('cepCEP').value;

    if (cepValor != '') {
      UseCep(cep).then(data => {
        const erro = data.erro;
  
        if (erro != true) {
          UseCep(cep).then(data => {
            const logradouro = data.logradouro;
            const bairro = data.bairro;
            const estado = data.uf;
            const cidade = data.localidade;
      
            setLogradouro(logradouro);
            setBairro(bairro);
            setEstado(estado);
            setCidade(cidade);
            setCep(cep);   
                        
            setCorFundoEstado(estado);
            setCorFundoMunicipio(cidade);
            setCorFundoDistrito(bairro);
          })
        } else {
          alert('CEP INVÁLIDO !!!')
        }
  
      })
    } else {
      alert('O CAMPO CEP ESTA VAZIO !!!')
    }
  }

  return (

    <Container>
      <Row className="mb-12 mt-3">
        <Form.Label className='lblTitle mb-12 mt-3'>Relatar assalto</Form.Label>
      </Row>

      <Form >
        <Row className="mb-12 mt-3">
          <Form.Group as={Col} md="3">
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">CEP</InputGroup.Text>

              <FormControl
                type="text"
                as={IMaskInput}
                mask="00000-000"
                onChange={handleChange}
                value={cep}
                name={"cep"}
                id='cepCEP'

                className={`form-selectDefault != ${cep ? 'form-selectSelected' : ''}`}
              />

              <span className="input-group-btn">
                <a className="btn btn-primary" onClick={onClick}>
                  <span className="glyphicon glyphicon-search "></span> Pesquisar
                </a>
              </span>

              <Form.Control.Feedback>O campo cep não é obrigatório.</Form.Control.Feedback>
            </InputGroup>

          </Form.Group>

          <Form.Group as={Col} md="9">
            <Form.Label className='mt-2'><a style={{ textDecoration: "none" }} href='https://buscacepinter.correios.com.br/app/endereco/index.php'>Não sei o CEP</a></Form.Label>
          </Form.Group>
        </Row>
      </Form>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} md="9" controlId="validationCustom01">
            <Form.Label>Lougradouro (Rua/Av/Tv):</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              className={`form-selectDefault != ${logradouro ? 'form-selectSelected' : ''}`}
              value={logradouro}
            />
            <Form.Control.Feedback>O logradouro cep não é obrigatório.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Número:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeNumero} 
              className={`form-selectDefault != ${corFundoTextNumero ? 'form-selectSelected' : ''}`}
              value={corFundoTextNumero}
            />
            <Form.Control.Feedback>O campo número não é obrigatório.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">
          {/* Estados */}
          <Form.Group as={Col} md="4" controlId="" >
            <Form.Label><span style={{ color: 'red' }}>* </span>Estado:</Form.Label>
            <Form.Select id='idSelectEstado' required aria-label="Default select example"
              className={`form-selectDefault != ${corFundoEstado ? 'form-selectSelected' : ''}`}
              onChange={handleChangeEstado}
              value={corFundoEstado}
            >
              <option className="d-none" value={estado}>
                {estado}
              </option>

              {/*
                <option key={estado.id} value={estado.id}>{estado.nome}</option>              
              */}
              {UseEstados().map(estado => (
                <option key={estado.id} value={estado.id}>{estado.sigla}</option>
              ))}

            </Form.Select>

            <Form.Control.Feedback type="invalid">
              O campo estado é obrigatório.
            </Form.Control.Feedback>

          </Form.Group>
          {/* Estados */}

          {/* Municipios */}
          <Form.Group as={Col} md="4" controlId="" >
            <Form.Label><span style={{ color: 'red' }}>* </span>Municipio:</Form.Label>
            <Form.Select required aria-label="Default select example"
              className={`form-selectDefault != ${corFundoMunicipio ? 'form-selectSelected' : ''}`}
              onChange={handleChangeMunicipio}
              value={corFundoMunicipio}
            >
              <option className="d-none" value={cidade}>
                {cidade}
              </option>

              {UseMunicipios(estadoSelecionado).map(municipio => (
                <option key={municipio.id} value={municipio.id}>{municipio.nome}</option>
              ))}

            </Form.Select>

            <Form.Control.Feedback type="invalid">
              O campo municipio é obrigatório.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Municipios */}

          {/* Distritos */}
          <Form.Group as={Col} md="4" controlId="" >
            <Form.Label><span style={{ color: 'red' }}>* </span>Bairro | Distrito:</Form.Label>
            <Form.Select required aria-label="Default select example"
              className={`form-selectDefault != ${corFundoDistrito ? 'form-selectSelected' : ''}`}
              onChange={handleChangeDistrito}
              value={corFundoDistrito}
            >
              <option className="d-none" value={bairro}>
                {bairro}
              </option>

              {UseDistritos(municipioSelecionado).map(distrito => (
                <option key={distrito.id} value={distrito.id}>{distrito.nome}</option>
              ))}

            </Form.Select>

            <Form.Control.Feedback type="invalid">
              O campo bairro é obrigatório.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Distritos */}
        </Row>

        <Button className='btnEnviar' type="submit">Enviar</Button>

      </Form>

    </Container>
  );
}

export default Relatar;