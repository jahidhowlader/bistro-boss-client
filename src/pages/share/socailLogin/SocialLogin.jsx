import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    // Context API
    const { signinWithGoogle, profileUpdated } = useContext(AuthContext)

    // Use Navigation
    const navigate = useNavigate()

    // Handler Google Signin
    const handlerGoogleSignin = () => {
        signinWithGoogle()
            .then(userCredential => {

                profileUpdated(userCredential.user.displayName, userCredential.user.photoURL)
                    .then(() => {

                        const savedUser = {
                            name: userCredential.user.displayName,
                            email: userCredential.user.email
                        }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate('/')

                            })
                    })
            })
            .catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='flex justify-center items-center pt-3'>
            <div className='flex gap-14'>
                <FaFacebookF className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaFacebookF>
                <FaGoogle onClick={handlerGoogleSignin} className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaGoogle>
                <FaGithub className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaGithub>
            </div>
        </div>
    );
};

export default SocialLogin;