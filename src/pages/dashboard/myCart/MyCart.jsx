import { Helmet } from "react-helmet-async";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyCart = () => {

    // context API
    const {user} = useContext(AuthContext)

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

    // handlerDeleteCartItem
    const handlerDeleteCartItem = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#111827',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    // handleClearCart
    const handleClearCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#111827',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>My Cart | BISTRO BOSS</title>
            </Helmet>

            <SectionTitle
                subHeading="My Cart"
                heading="WANNA ADD MORE?"
            ></SectionTitle>

            <div className="px-12 py-14 mx-36 bg-white">
                <div className="flex justify-between items-center w-full">
                    <h4 className="text-3xl font-bold logo-font">Total orders: {cart.length}</h4>
                    <h4 className="text-3xl font-bold logo-font">total price: ${totalPrice}</h4>
                    <div>
                        <button className="bg-d-nav text-white px-5 py-3 rounded logo-font font-bold">PAY</button>
                        <button onClick={handleClearCart} className="bg-red text-white px-5 py-3 rounded logo-font font-bold mx-2" disabled={cart.length === 0 ? true : false}>CLEAR CART</button>
                    </div>
                </div>

                {/* Table for Cart Item */}
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="">
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th >ITEM NAME</th>
                                <th >PRICE</th>
                                <th >ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask w-12 h-12">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>

                                    </td>
                                    <td >{item.title}</td>
                                    <td >${item.price}</td>
                                    <th >
                                        <button onClick={() => handlerDeleteCartItem(item._id)}><FaRegTrashAlt className="bg-red text-white p-2 text-4xl rounded"></FaRegTrashAlt></button>
                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyCart;