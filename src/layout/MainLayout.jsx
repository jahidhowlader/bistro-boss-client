import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/footer/Footer';
import Navbar from '../pages/share/navbar/Navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;