import React from 'react';
import './Body.css';

function Body() {
  return (
    <div className="App">
      <div className="titulo">
        <h1>Bem-vindo à Página Inicial da nossa AV2</h1>
        </div>  

        <div className="subtitulo">
        <h50>Conheça os melhores Cosplays do SESI/SENAI</h50>
        </div>

      <div className="taliimg">
        <img src={require('./FOTO1.jpg')} alt="pessoa1" />

        {/* <img src={require('./FOTO2.jpg')} alt="pessoa2" />
        <img src={require('./FOTO3.jpg')} alt="pessoa3" /> */}
      </div>
    </div>
  );
}

  export default Body;