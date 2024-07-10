
const FormaDeBolo = (props) => {
    return ( 
        // eslint-disable-next-line react/prop-types
        <h1>Bolo de {props.sabor} com cobertura de {props.cobertura}</h1> //props.sabor diz que existira em app uma variavelchamda sabor
     );
}
 
export default FormaDeBolo;