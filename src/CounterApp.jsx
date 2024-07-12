import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    console.log("Recargando componente...");
    const [counter, setCounter ] = useState( value );

    const handleAdd = () =>{
        console.log('+1');
        console.log( counter );
        setCounter( counter + 1);
    };

    const handleDelete = () => {
        setCounter((count) => count - 1);
    };

    const handleReset = ()=> setCounter(value);

    return (
        <>
            <h2>CounterApp</h2>
            <h1>{ counter }</h1>
            <button onClick={ handleAdd }>
                Add(+1)
            </button>

            <button onClick={ handleDelete }>
                Delete(-1)
            </button>

            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;