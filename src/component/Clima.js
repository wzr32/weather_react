import React from 'react';

const Clima = ({apiResult}) => {
    
    
    const { name, main } = apiResult;
    if (!name) return null;
    
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima en {name} es:</h2>
                <p className="temperatura">
                    {(main.temp - 273.15).toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default Clima;