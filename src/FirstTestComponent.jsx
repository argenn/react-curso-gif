import PropTypes from "prop-types";

const getResult = (a, b) => {
    return a + b;
};

const messageGlobal = {
    message : "Mensaje objeto",
    title: "Argenis"
}

// Valores por defecto
// const FirstApp = ({title= 'Titulo por defecto', subTitle= 'Yo deberia ser numerico, pero me permiten esto en valores por defecto'})

const FirstApp = ({title, subTitle}) => {

    return (
        <>
            <h2>1.- { title }</h2>
            <h2>2.- { subTitle + 10} </h2>
            <h1>Resultado de suma: { getResult(10, 12) }</h1>
            {
                // Esto es solo un bloque vacio
                // que continiene solo comentarios
            }
            <code>{ JSON.stringify( messageGlobal ) }</code>
            <p>Este es un parrafo</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
};

FirstApp.defaultProps = {
    title : 'Soy otra forma de titulo por defecto',
    subTitle : 'Soy otro subtitle y tambien deberia ser numerico'
};

export default FirstApp;