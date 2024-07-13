import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home";
import Produto from "../pages/Produtos";
import PageLayout from "../layaouts/PageLayout";
import NotFound from "../pages/NotFound";
//import Header from './../components/Header';


const Paths = () => {


    return ( 
        <>  
            
            <BrowserRouter>
                
                <Routes>

                    <Route path="/" element={<PageLayout/>}>
                        <Route index element={<Home/>} />
                        <Route path="/produtos" element={<Produto/>} />
                        <Route path="/Produto/:id/:nome" element={<Produto/>}/> 
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                
            </BrowserRouter>
            
        </>
     );
}
 
export default Paths;