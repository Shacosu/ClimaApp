import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setRequest }) => {
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }
        setError(false)

        setRequest(true)
    }
    
    const { ciudad, pais } = search;
    return ( 
        <form onSubmit={handleSubmit}>
            {error ? <Error msg="Ambos campos son requeridos" /> : null}
            <div className="input-field col s12">
            <input 
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                    <option value=""> -- Seleccione un pais -- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="CL">Chile</option>
                </select>
                <label htmlFor="pais">Elija su Pais: </label>
                <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12 button"
                >Buscar Clima</button>
            </div>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired,
}

export default Form;