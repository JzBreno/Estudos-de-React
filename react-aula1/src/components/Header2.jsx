import { Link } from "react-router-dom";

const Header2 = () => {
    return ( 
        <>
            <header>
                <h1>
                    Logo
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                            
                        </li>
                        <li>
                            <Link to={"/produtos"}>Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
     );
}
 
export default Header2;