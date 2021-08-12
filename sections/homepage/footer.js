// import '../../styles/styles.css';
const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col    justify-around items-center container min-w-full h-100 bg-footer-bg">
                <img src="images/logo.png" alt="logo" className="logo-footer h-80" />
                <h2 className="italic">Follow Us</h2>
                <div className=" w-80  flex flex-row justify-around ml-20 mr-20">
                    <img src="images/youtube.svg" alt="youtube" className="icons" />
                    <img src="images/insta.svg" alt="youtube" className="icons" />
                    <img src="images/whatsapp.svg" alt="youtube" className="icons" />
                    <img src="images/phone.svg" alt="youtube" className="icons" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
