import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";


const Navbar = () => {

    // Auth Context
    const { user, signout } = useContext(AuthContext)

    // TanStack React Query 
    const [cart] = useCart()

    // Hanler Signout
    const handlerSignout = () => {

        signout()
            .then(() => {

                toast.success('Successfully Signout!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    const navOption = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/shop/salad">OUR SHOP</Link></li>
        <li><Link to="/private">PRIVATE</Link></li>
        <li>|</li>

        <li>
            <Link to="/dashboard/mycart">
                <div className="relative">
                    <FaShoppingCart></FaShoppingCart>
                    <p className="absolute -top-3 left-5">{cart?.length || 0}</p>
                </div>
            </Link>
        </li>
        {
            user ? <>
                <li>
                    <button onClick={handlerSignout}>
                        <Link to="/">SIGN OUT</Link>
                    </button>
                    <span>{user.displayName}</span>
                </li>
            </> :
                <li><Link to="/signin">SIGN IN</Link></li>
        }
    </>
    return (
        <>
            <div className="navbar bg-black text-white bg-opacity-60 fixed z-10 py-4 px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <div>
                        <Link className="logo-font font-extrabold text-3xl">BISTRO BOSS </Link>
                        <br />
                        <span className="logo-font font-bold text-2xl tracking-wider">Restaurant</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul> */}
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Get started</a> */}
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navOption}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;