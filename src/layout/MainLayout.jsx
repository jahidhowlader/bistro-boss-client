import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/share/footer/Footer';
import Navbar from '../pages/share/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

            {/* React ToastContainer */}
            <ToastContainer></ToastContainer>
        </>
    );
};

export default MainLayout;