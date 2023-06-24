import React from 'react';
import './style.css';

export default function App() {




  return (
    <div className="main-container" >

      <div className="grupo">
        <h3>Grupo A</h3>
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
            <tr>
              <td>1</td>
              <td>Racing Club</td>
              <td>10</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>8</td>
              <td>9</td>
              <td>3</td>
            </tr>
          </table>
        </div>
      </div>

    </div>
  );
}
