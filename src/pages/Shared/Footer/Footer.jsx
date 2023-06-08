import { FaEnvelopeOpen, FaPhoneAlt, FaRegClock, FaSearchLocation } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#373737] text-white">
            <div>
                <img src="https://i.ibb.co/3N7M5Ks/logo.png" alt="" />
                <p>Wolves Sports Company Ltd.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Get In Touch</span>
                <div className="flex space-x-2 items-center">
                    <FaSearchLocation />
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <FaPhoneAlt />
                    <p>+880 1678 980021</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <FaEnvelopeOpen />
                    <p>wolves@gmail.com</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <FaRegClock />
                    <p>07.00 AM - 19.00 PM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;