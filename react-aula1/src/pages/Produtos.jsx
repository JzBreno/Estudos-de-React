import { Link } from 'react-router-dom';
const Produto = () => {

    return ( 
        <>
            <h1>Produto</h1>
            <ul>
            <li><Link to="/Produto/1/Cenoura">Cenoura</Link></li>
            <li><Link to="/Produto/2/Batata">Batata</Link></li>
            <li><Link to="/Produto/3/Teste">Teste</Link></li>
            <li><Link to="/Produto/4/Cebola">Cebola</Link></li>
            <li><Link to="/Produto/5/Cocores">Cocores</Link></li>
        </ul>
        </>
     );
}
 
export default Produto;