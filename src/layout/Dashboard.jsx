import { FaBookReader, FaCalendarAlt, FaEnvelope, FaGrinStars, FaGripLines, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart()

    return (
        <>
            <div className="drawer drawer-mobile bg ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-dashboard">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-d-nav logo-font font-bold">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/dashboard/home"><FaHome></FaHome> User Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservation</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/history"><FaWallet></FaWallet> payment history</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> my cart <div className="badge badge-secondary">{cart?.length || 0}</div></Link>
                        </li>
                        <li>
                            <Link to="/dashboard/review"><FaGrinStars></FaGrinStars> add review</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/bookings"><FaBookReader></FaBookReader> my booking</Link>
                        </li>
                        <div className="divider "></div>
                        <li>
                            <Link to="/"><FaHome></FaHome> Home</Link>
                        </li>
                        <li>
                            <Link to="/menu"><FaGripLines></FaGripLines> Menu</Link>
                        </li>
                        <li>
                            <Link to="/shop/salad"><FaShoppingBag></FaShoppingBag> Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact"><FaEnvelope></FaEnvelope> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Dashboard;