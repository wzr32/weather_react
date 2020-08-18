import React,{useState} from 'react';

const Formulario = ({search, setSearch, setConsulta}) => {

    const [ error, setError ] = useState(false);
    const { ciudad, pais } = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()

        if (ciudad.trim() === '' || pais.trim() === ''){
            setError(true)
            console.log('error', error)
            return;
        };

        setError(false);
        setConsulta(true);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p>: null }
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
                    <select 
                        name="pais" 
                        id="pais"
                        onChange={handleChange}
                    >
                        <option value="" defaultValue>Seleccione ...</option>
                        <option value="VE">Venezuela</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">Pais: </label>
                </div>

                <button 
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block blue darken-3"
                >Consultar</button>
                
            </form>
        </div>
    );
};

export default Formulario;