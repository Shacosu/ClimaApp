import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error'

function App() {
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
})
  const [request, setRequest] = useState(false)
  const [response, setResponse] = useState({})
  const [error, setError] = useState(false)
  const { ciudad, pais } = search;
  useEffect(() => {
    const requestAPI = async () => {
      if (request) {
        const appID = '1fa066b7984fee20f2b4683342ade2b8';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
        const req = await fetch(url);
        const res = await req.json();
        setResponse(res);
        setRequest(false);
        if (res.cod === "404"){
          setError(true);
        } else {
          setError(false)
        }
      }
    }
    requestAPI()
    // eslint-disable-next-line
  }, [request])

  let component;
  if (error) {
    component = <Error msg="No se han encontrado resultados :(" />;
  } else {
    component = <Weather response={response} />
  }


  return (
    <React.Fragment>
      <NavBar title="Clima"/>
      <div className="contenedor-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Form 
                    search={search} 
                    setSearch={setSearch} 
                    setRequest={setRequest}
                    />
                </div>
                <div className="col m6 s12">
                    {component}
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
