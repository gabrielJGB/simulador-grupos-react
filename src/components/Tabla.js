import React from 'react';

const Tabla = (props) => {
  return (
    <div className="tabla-grupo">
      <table>
        <tr>
          <th>#</th>
          <th>Equipo</th>
          <th>Pts</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PE</th>
          <th>PP</th>
          <th>GF</th>
          <th>GC</th>
          <th>DIF</th>
        </tr>

        {
          props.datos_equipos.map(equipo=>(
            <tr>
              <td>{equipo.posicion}</td>
              <td>{equipo.equipo}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.PJ}</td>
              <td>{equipo.PG}</td>
              <td>{equipo.PE}</td>
              <td>{equipo.PP}</td>
              <td>{equipo.GF}</td>
              <td>{equipo.GC}</td>
              <td>{equipo.dif}</td>
            </tr>
          ))
        }

      </table>
    </div>
  );
};

export default Tabla;
