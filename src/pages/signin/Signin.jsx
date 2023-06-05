import authThumbnail from '../../assets/others/authentication2.png'
import './Signin.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../share/socailLogin/SocialLogin';

const Signin = () => {

    // All State is here
    const [captcha, setCaptcha] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [signinError, setSigninError] = useState(false)

    // Use Navigation
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    useEffect(() => {

        loadCaptchaEnginge(6);
    }, [])

    const handlerCaptcha = e => {

        const user_captcha_value = e.target.value
        setCaptcha(user_captcha_value)

        if (validateCaptcha(user_captcha_value, false)) {
            setDisabled(false)
        }

        else {
            setDisabled(true)
        }
    }

    // Auth Context
    const { signIn } = useContext(AuthContext)

    // React Form Hook 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(userCredential => {
                console.log(userCredential.user);
                navigate(from, { replace: true })
            })
            .catch(e => {

                setSigninError(true)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.code,
                    html: `<span class="text-red font-bold">${e.code}`,
                })
            })
    }

    return (
        <>
            <Helmet>
                <title>Signin | BISTRO BOSS</title>
            </Helmet>

            <section id='authCover' >
                <div className='flex justify-center items-center h-[100vh] '>
                    <div id='authBg' className='grid md:grid-cols-2 gap-20 md:pl-24 items-center max-width border border-black border-opacity-10 shadow-2xl md:py-11 '>
                        <div className='md:pr-10 mt-40 md:mt-0'>
                            <img src={authThumbnail} alt="authThumbnail" />
                        </div>
                        <div className='max-w-sm mx-5 md:mx-0 mb-20 md:mb-0'>
                            <h2 className='text-[40px] font-bold text-center w-full '>Sign In</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>

                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="Enter your email" className={`input input-bordered w-full ${errors.email || signinError ? 'border-red focus:outline-red' : ''}`} />

                                    {errors.email && <span className='mt-1 text-red'>Email is required</span>}
                                </div>

                                {/* Password */}
                                <div className="form-control mt-2">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>

                                    <input type="password" {...register("password", { required: true })} name='password' placeholder="Enter your password" className={`input input-bordered w-full ${errors.password || signinError ? 'border-red focus:outline-red' : ''}`} />

                                    {errors.password && <span className='mt-1 text-red'>Password is required</span>}
                                </div>

                                {/* Captcha */}
                                <div id='captcha' className='mt-5 w-full font-bold'>
                                    <LoadCanvasTemplate />
                                </div>
                                <input onChange={handlerCaptcha} type="text" name='captcha' value={captcha} placeholder="Type your captcha" className="input input-bordered w-full mt-3" />

                                {/* Submit */}
                                <input type="submit" value="Sign In" className={` font-bold cursor-pointer rounded-lg block py-2.5 w-full  mt-5 ${disabled ? 'bg-sub-title bg-opacity-20 border-2 border-sub-title border-opacity-20' : 'bg-sub-title border-2 hover:bg-transparent hover:border-2 hover:border-sub-title text-white hover:text-sub-title'}`} disabled={disabled ? true : false} />
                            </form>

                            <div className='text-center'>
                                <Link to="/signup">
                                    <p className='text-sub-title mt-8 mb-4'>New here? <span className='font-bold '> Create a New Account</span></p>
                                </Link>
                                <p>Or sign in with</p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Signin;