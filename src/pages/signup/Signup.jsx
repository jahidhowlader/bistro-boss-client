import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import authThumbnail from '../../assets/others/authentication2.png'
import './Signup.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {

    const {user, signinWithGoogle} = useContext(AuthContext)
    console.log(user);

    // const handlerGoogleSignin = () => {
    //     signinWithGoogle()
    //     .then()
    //     .catch(e => {
    //         console.log(e);
    //     })
    // }

    return (
        <section id='authCover' >
            <div className='flex justify-center items-center h-[100vh] '>
                <div id='authBg' className='grid md:grid-cols-2 gap-2 md:pl-24 items-center max-width border border-black border-opacity-10 shadow-2xl md:py-11 '>
                   
                    <div className='max-w-sm mx-5 md:mx-0 mb-20 md:mb-0'>
                        <h2 className='text-[40px] font-bold text-center w-full '>Sign Up</h2>
                        <form className='space-y-'>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered w-full " />
                            </div>

                              {/* Email */}
                              <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full " />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Enter your password" className="input input-bordered w-full " />
                            </div>

                            {/* Submit */}
                            <input type="submit" value="Sign In" className='bg-sub-title border-2 hover:bg-transparent hover:border-2 hover:border-sub-title text-white hover:text-sub-title font-bold cursor-pointer rounded-lg block py-2.5 w-full  mt-5' />
                        </form>

                        <div className='text-center'>
                            <Link to="/signin">
                                <p className='text-sub-title mt-8 mb-4'>Already registered? <span className='font-bold'> Go to log in</span></p>
                            </Link>
                            <p>Or sign in with</p>
                            <div className='flex justify-center items-center pt-3'>
                                <div className='flex gap-14'>
                                    <FaFacebookF className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaFacebookF>
                                    <FaGoogle className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaGoogle>
                                    <FaGithub className='border-2 rounded-full text-4xl p-2 cursor-pointer hover:bg-sub-title hover:text-white hover:border-sub-title'></FaGithub>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:pr-20 mt-40 md:mt-0 order-first md:order-last'>
                        <img src={authThumbnail} alt="authThumbnail" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;