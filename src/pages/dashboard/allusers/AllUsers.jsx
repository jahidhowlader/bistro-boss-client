import { Helmet } from "react-helmet-async";
import SectionTitle from "../../share/sectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    // handlerMakeAdmin
    const handlerMakeAdmin = _id => {
        // TODO
        console.log(_id);
    }

    // handlerDeleteUser
    const handlerDeleteUser = _id => {
        // TODO
        console.log(_id);
    }




    return (
        <>
            <Helmet>
                <title>All Users | BISTRO BOSS</title>
            </Helmet>

            <SectionTitle
                subHeading="How Many.??"
                heading="MANAGE ALL USERS"
            ></SectionTitle>

            <div className="px-12 py-14 mx-36 bg-white">
                <div >
                    <h4 className="text-3xl font-bold logo-font">Total Users: {users.length}</h4>

                </div>


                <div className="overflow-x-auto mt-5">
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handlerMakeAdmin(user._id)}><FaUsers className="bg-d-nav text-white p-2 text-4xl rounded"></FaUsers></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handlerDeleteUser(user._id)}><FaRegTrashAlt className="bg-red text-white p-2 text-4xl rounded"></FaRegTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;