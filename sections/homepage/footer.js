import Icons from '../components/icons';
const Footer = () => {
    return (
        <footer className="min-w-full bg-footer-bg bg-no-repeat bg-cover h-200">
            <div className="flex flex-row  justify-between items-center min-w-full h-180">
                <div className="w-1/3 mx-auto"></div>
                {/* <div className="flex flex-row justify-between border-black border-2"> */}
                <div mx-auto my-6>
                    <img src="images/logo.png" alt="logo" className="logo-footer h-80" />
                    <h1 className="font-header text-center mt-4 mb-4  text-2xl">
                        Have a good day !!!
                    </h1>
                </div>
                <div className="mx-auto my-auto">
                    <h2 className="font-header text-6xl text-center">Follow Us</h2>
                    <Icons />
                    {/* </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
