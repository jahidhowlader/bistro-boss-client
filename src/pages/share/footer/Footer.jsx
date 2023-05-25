import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import moment from 'moment'

const Footer = () => {

    const currentYear = moment().format('YYYY');

    return (
        <>
            <footer className="text-white">
                <div className="grid md:grid-cols-2">
                    <div className="bg-footer-clr bg-opacity-90 py-24">
                        <div className="w-[660px] ml-auto text-center">
                            <h6 className="text-3xl pb-6">CONTACT US</h6>
                            <div className="space-y-3">
                                <p>123 ABS Street, Uni 21, Bangladesh</p>
                                <p>+88 123456789</p>
                                <p>Mon - Fri: 08:00 - 22:00</p>
                                <p>Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-footer-clr text-center py-24">
                        <div className="w-[660px] mr-auto text-center">
                            <h6 className="text-3xl pb-6">Follow US</h6>
                            <p>Join us on social media</p>
                            <div className="flex mx-auto justify-center pt-6 gap-8 text-3xl">
                                <FaFacebookF></FaFacebookF>
                                <FaInstagram></FaInstagram>
                                <FaTwitter></FaTwitter>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="items-center md:grid-flow-col bg-black py-5">
                    <p className="text-center">Copyright © CulinaryCloud {currentYear} - All right reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;