import React from 'react';
import Tabla from './Tabla';
import Fecha from './Fecha';

const Grupo = (props) => {
  return (
    <div className="grupo">
      <h3>Grupo {props.datos_grupo.grupo}</h3>
      <Tabla datos_equipos={props.datos_grupo.equipos} />

      <div className="fechas-container">
        <Fecha />
        <Fecha />
        <Fecha />
        <Fecha />
      </div>

    </div>
  );
};

export default Grupo;
