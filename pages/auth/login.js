const Login = () => {
    return (
        <div className=" flex flex-row w-full h-screen overflow-hidden  m-0 ">
            <div className=" w-2/3 bg-login-bg bg-no-repeat h-screen "></div>
            <div className="p-10 w-full text-center ">
                <div className="font-bold  ">
                    <p className="text-3xl my-4 font-body">WELCOME BACK</p>
                    <h2 className="text-5xl my-4 font-body">Log into your account</h2>
                </div>
                <form className="pt-10" action="" method="POST">
                    <div className="pt-2 block h-36 flex flex-col items-center">
                        <input
                            className="font-body my-4 py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            length="20"
                            required></input>
                        <input
                            className="font-body mt-4  py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            length="20"
                            required></input>
                    </div>
                    <p className="-ml-4 font-body font-medium text-start w-3/5  hover:underline ">
                        <a href="#">Forgot Password?</a>
                    </p>
                    <div className="my-8 font-header">
                        <button
                            className="transition duration-500 ease-in-out text-xl font-body rounded-2xl m-4 px-4 py-2 bg-black text-white hover:bg-myCyan-100 transform hover:-translate-y-1 hover:scale-110 "
                            type="submit"
                            id="login-button">
                            Login Now
                        </button>

                        <div className="m-auto   w-3/5  content-center	">
                            <hr className=" w-full"></hr>
                            <p className="text-xl">OR</p>
                            <hr className="w-full"></hr>
                        </div>
                        <div className="">
                            <a href="/auth/google">
                                <button
                                    className=" transition duration-500 ease-in-out text-xl font-body rounded-2xl m-4 px-4 py-2 bg-black text-white hover:bg-myCyan-100 transform hover:-translate-y-1 hover:scale-110 "
                                    type="submit">
                                    Continue with Google
                                </button>
                            </a>
                        </div>
                        <div className="hover:bg-red font-body text-lg flex flex-row justify-between w-2/5 m-auto">
                            <p>Not a registered user?</p>
                            <p>
                                <a
                                    href="/signup"
                                    className="p-1 underline transform transition duration-500 hover:scale-110 hover:bg-black hover:text-white rounded p-2 ">
                                    Sign up Now!
                                </a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
