import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/share/footer/Footer';
import Navbar from '../pages/share/navbar/Navbar';

const MainLayout = () => {

    const location = useLocation()
    const pathname = location.pathname
    const hiddenNabAndFooter = pathname.includes('signin') || pathname.includes('signup')

    return (
        <>
            {
                hiddenNabAndFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                hiddenNabAndFooter || <Footer></Footer>
            }
        </>
    );
};

export default MainLayout;