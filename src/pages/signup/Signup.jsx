import authThumbnail from '../../assets/others/authentication2.png'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../share/socailLogin/SocialLogin';

const Signup = () => {

    // Context API
    const { createUser, profileUpdated } = useContext(AuthContext)

    // React Hook Form
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    // Use Navigation
    const navigate = useNavigate()

    // form Submit
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(() => {

                profileUpdated(data.name, data.photo)
                    .then(() => {

                        const savedUser = {
                            name: data.name,
                            email: data.email
                        }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {

                                    reset()
                                    navigate('/')
                                }
                            })
                    })

            })
            .catch(e => {
                console.log(e.message);
                console.log(e.code);
            })
    }

    return (
        <>
            <Helmet>
                <title>Sign up | BISTRO BOSS</title>
            </Helmet>
            <section id='authCover' >
                <div className='flex justify-center items-center h-[100vh] '>
                    <div id='authBg' className='grid md:grid-cols-2 gap-2 md:pl-24 items-center max-width border border-black border-opacity-10 shadow-2xl md:py-11 '>

                        <div className='max-w-sm mx-5 md:mx-0 mb-20 md:mb-0'>
                            <h2 className='text-[40px] font-bold text-center w-full '>Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" {...register("name", {
                                        required: true
                                    })}
                                        name='name' placeholder="Enter your name" className={`input input-bordered w-full ${errors.name ? 'border-red focus:outline-red' : ''}`} />
                                    {
                                        errors.firstName?.type === 'required' && <span className='text-red mt-1'>Name is required</span>
                                    }
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" {...register("email", {
                                        required: true,
                                        pattern: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
                                    })}
                                        name='email' placeholder="Enter your email" className={`input input-bordered w-full ${errors.email ? 'border-red focus:outline-red' : ''}`} />
                                    {
                                        errors.email?.type === 'required' && <span className='text-red mt-1'>Email is required</span>
                                    }
                                    {
                                        errors.email?.type === 'pattern' && <span className='text-red mt-1'>Email address is not validated</span>
                                    }
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="text" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/
                                    })}
                                        name='password' placeholder="Enter your password" className={`input input-bordered w-full ${errors.password ? 'border-red focus:outline-red' : ''}`} />
                                    {
                                        errors.password?.type === 'required' && <span className='text-red mt-1'>Password is required</span>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <span className='text-red mt-1'>Password will be minimum 6 character</span>
                                    }
                                    {
                                        errors.password?.type === 'maxLength' && <span className='text-red mt-1'>Password will be limited 20 character</span>
                                    }
                                    {
                                        errors.password?.type === 'pattern' && <span className='text-red mt-1'>Password will be 1 uppercase, 1 lowercase, 1 number and 1 special character</span>
                                    }
                                </div>

                                {/* Submit */}
                                <input type="submit" value="Sign Up" className='bg-sub-title border-2 hover:bg-transparent hover:border-2 hover:border-sub-title text-white hover:text-sub-title font-bold cursor-pointer rounded-lg block py-2.5 w-full  mt-5' />
                            </form>

                            <div className='text-center'>
                                <Link to="/signin">
                                    <p className='text-sub-title mt-8 mb-4'>Already registered? <span className='font-bold'> Go to log in</span></p>
                                </Link>
                                <p>Or sign in with</p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>

                        <div className='md:pr-20 mt-40 md:mt-0 order-first md:order-last'>
                            <img src={authThumbnail} alt="authThumbnail" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;