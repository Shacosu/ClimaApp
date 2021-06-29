import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ response }) => {
    const { name, main } = response;
    if (!name) return null;
    const kelvin = 273.15;
    return ( 
       <div className="card-panel white col s12">
           <div className="black-text">
               <h2>El clima en {name} es: </h2>
               <p className="temperatura">{parseInt(main.temp - kelvin)}<span>&#x2103;</span></p>
               <p className="red col s6">Temperatura maxima: {parseInt(main.temp_max - kelvin)}<span>&#x2103;</span></p>
               <p className="blue col s6">Temperatura minima: {parseInt(main.temp_min - kelvin)}<span>&#x2103;</span></p>
           </div>
       </div>
     );
}

Weather.propTypes = {
    response: PropTypes.object.isRequired
}
 
export default Weather;