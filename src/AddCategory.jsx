import { useState } from 'react';
import "./styles.css";
import { useFecthGifs } from './hooks/useFecthGifs';

export const AddCategory = ({onAddTratamiento}) => {
    console.log('En AddCategory');

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        //console.log('>' + target.value);
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault(); // Evita el refresh del formulario
        
        if(inputValue.trim().length <= 1)
            return;

        onAddTratamiento(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ (evento) => onSubmit(evento) }>
            {/* Se puede invocar como { onSubmit } */}
            <input 
                type="text"
                placeholder="Buscar medicamento..."
                value={ inputValue }
                onChange={ onInputChange } /> 
                {/* onChange={ onInputChange } es lo mismo que onChange={ (event) => onInputChange(event) }*/}
                {/* Si no se agrega el evento onChange, se muestra advertencia de readonly */}
                
        </form>
    );
};