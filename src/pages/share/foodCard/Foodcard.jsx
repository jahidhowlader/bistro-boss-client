import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ image, title, details, price, item }) => {

    // Auth Context
    const { user } = useContext(AuthContext)

    // Tanstack React Query
    const [, refetch] = useCart()

    // Navigation
    const navigate = useNavigate()
    const location = useLocation()

    const handlerAddToCart = item => {

        if (user) {

            const addCart = {
                productItem: item._id,
                email: user.email,
                price,
                title,
                image
            }

            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(addCart)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    console.log(data);
                })
        } else {
            Swal.fire({
                title: 'Please Sign In First...!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#E8E8E8',
                cancelButtonColor: '#111827',
                confirmButtonText: 'Sign In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card bg-grey rounded-none relative">
            {price && <p className="bg-black text-white px-5 py-2 absolute right-5 top-5">${price}</p>}
            <img src={image} alt="salads" className="" style={{ height: "300px" }} />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button onClick={() => handlerAddToCart(item)} className="btn btn-outline bg-btn-grey border-0 border-b-2 border-sub-title text-sub-title hover:text-sub-title rounded-md px-6 text-lg font-normal mt-4">add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;