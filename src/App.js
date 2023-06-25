import React from 'react';
import './style.css';

import Grupo from './components/Grupo';

export default function App() {
  const grupos_array = 
  [
    {
      grupo: 'A',
      equipos: [
        {
          posicion: 1,
          equipo: 'Racing Club',
          puntos: 21,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
        {
          posicion: 2,
          equipo: 'Club Racing',
          puntos: 22,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
      ],
      fechas: [
        {
          numero: 1,
          partidos: [
            {
              dia: 'Mie 5/4, 19:00',
              local: 'AUC',
              visitante: 'FLA',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
        {
          numero: 2,
          partidos: [
            {
              dia: 'Jue 5/4, 19:00',
              local: 'AUF',
              visitante: 'LAF',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
      ],
    },

    {
      grupo: 'B',
      equipos: [
        {
          posicion: 1,
          equipo: 'Boca Juniors',
          puntos: 21,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
        {
          posicion: 2,
          equipo: 'Juniors Boca',
          puntos: 22,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
      ],
      fechas: [
        {
          numero: 1,
          partidos: [
            {
              dia: 'Mie 5/4, 19:00',
              local: 'AUC',
              visitante: 'FLA',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
        {
          numero: 2,
          partidos: [
            {
              dia: 'Jue 5/4, 19:00',
              local: 'AUF',
              visitante: 'LAF',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
      ],
    },

    {
      grupo: 'C',
      equipos: [
        {
          posicion: 1,
          equipo: 'Racing Club',
          puntos: 21,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
        {
          posicion: 2,
          equipo: 'Club Racing',
          puntos: 22,
          PJ: 21,
          PG: 2,
          PE: 2,
          PP: 5,
          GF: 4,
          GC: 3,
          dif: -2,
        },
      ],
      fechas: [
        {
          numero: 1,
          partidos: [
            {
              dia: 'Mie 5/4, 19:00',
              local: 'AUC',
              visitante: 'FLA',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
        {
          numero: 2,
          partidos: [
            {
              dia: 'Jue 5/4, 19:00',
              local: 'AUF',
              visitante: 'LAF',
              escudo_local: 'img',
              escudo_visitante: 'img',
              goles_local: 2,
              goles_visitante: 1,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="main-container">
      {grupos_array.map((grupo) => (
        <Grupo datos_grupo={grupo} />
      ))}
    </div>
  );
}
