import Header2 from './../components/Header2';
import Footer from './../components/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {

    return ( 
        <>
            <Header2/>
            <Outlet/>
            <Footer/>
        </>
     );
}
 
export default PageLayout;