import React from 'react';

const Fecha = (props) => {
  return (
    <div className="fecha">
      <div className="fecha-numero">Fecha 1</div>
      <div className="fecha-partido">
        <div className="fecha-dia">Mie 7/9, 13:45</div>
        <div className="fecha-info">
          <div className="fecha-equipo">
            <img src="https://www.promiedos.com.ar/images/18/560.png" alt="" />
            <div className="fecha-local">AUC</div>
          </div>

          <div className="fecha-goles fecha-goles-local">
            <input type="text" />
          </div>
          <div className="fecha-goles fecha-goles-visitante">
            <input type="text" />
          </div>

          <div className="fecha-equipo">
            <img src="https://www.promiedos.com.ar/images/18/534.png" alt="" />
            <div className="fecha-visitante">LIV</div>
          </div>
        </div>
      </div>

      <div className="fecha-partido">
        <div className="fecha-dia">Mie 7/9, 13:45</div>
        <div className="fecha-info">
          <div className="fecha-equipo">
            <img src="https://www.promiedos.com.ar/images/18/560.png" alt="" />
            <div className="fecha-local">AUC</div>
          </div>

          <div className="fecha-goles fecha-goles-local">
            <input type="text" />
          </div>
          <div className="fecha-goles fecha-goles-visitante">
            <input type="text" />
          </div>

          <div className="fecha-equipo">
            <img src="https://www.promiedos.com.ar/images/18/534.png" alt="" />
            <div className="fecha-visitante">LIV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fecha;
