import React, { useState, useEffect } from 'react';
import './style.css';
import Grupo from './components/Grupo';
import grupos_array_json from './grupos_array.json';

export default function App() {
  const [gruposArray, setGruposArray] = useState(false);

  useEffect(() => {
    setGruposArray(grupos_array_json);
    console.log(grupos_array_json);
  }, []);

  if (!gruposArray) {
    return <div>Error</div>
  }
   return (
      <div className="main-container">
        {gruposArray.map((grupo) => (
          <Grupo datos_grupo={grupo} />
        ))}
      </div>
    );
}
