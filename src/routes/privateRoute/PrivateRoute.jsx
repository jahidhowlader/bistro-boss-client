import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loader from '../../utilities/loader/loader.json'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <>
            <div className="grid grid-cols-3">
                <div></div>
                <div>
                    <Lottie animationData={loader}></Lottie>
                </div>
            </div>
        </>
    }

    if (user) {
        return children
    }



    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;