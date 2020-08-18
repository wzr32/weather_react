import React, {useState, useEffect} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Clima from './component/Clima';

const App = () => {

  const [ search, setSearch ] = useState({
    ciudad: '',
    pais: ''
  });
  const { ciudad, pais } = search;
  
  const [ consulta, setConsulta ] = useState(false);
  const [apiResult, setApiResult] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const consultarApi = async () => {
      
      if (consulta){
        const apiKey = '0a6ad0b51e343e7717a2c65b212ec1eb'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${apiKey}`
  
        const response = await fetch(url)
        const result = await response.json()
        setApiResult(result)
        setConsulta(false)
      }

      if(apiResult.cod === '404'){
        setError(true)
      }else{
        setError(false)
      }
    }
    consultarApi()
  }, [consulta]);


  return (
    <div className="App">
      <Header
        titulo='Clima react'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">
              {error ? <p className="red darken-4 error">Ciudad no Encontrada</p>
              : 
              (
                <Clima
                  apiResult={apiResult}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
