const Login = () => {
    return (
        <div className="flex flex-row w-full h-full h-screen m-0 ">
            <div className=" w-2/3 bg-login-bg bg-no-repeat "></div>
            <div className="p-10 w-full text-center ">
                <section className="">
                    <div className="">
                        <div className="font-bold  ">
                            <p className="text-3xl my-4 font-body">WELCOME BACK</p>
                            <h2 className="text-5xl my-4 font-header">Log into your account</h2>
                        </div>
                        <form className="py-10" action="" method="POST">
                            <div className="pt-2 block h-36 flex flex-col items-center">
                                <input
                                className="font-body my-4 py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                length="20"
                                required>
                                </input>
                                <input
                                    className="font-body mt-4  py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    length="20"
                                    required>
                                </input>
                            </div>
                            <p className=" ml-1 font-body font-medium text-start w-3/5">
                                <a href="#">Forgot Password?</a>
                            </p>
                            <button className="my-4 bg-black text-white w-1/4 text-2xl font-body rounded-3xl p-1.5 transform transition hover:scale-500 " type="submit" id="login-button">
                                Login Now
                            </button>
                        </form>
                        <div className="strike">
                            <hr></hr>
                            <p>Or</p>
                            <hr></hr>
                        </div>
                        <div className="loginwithgoogle">
                            <a href="/auth/google">
                                <p>Continue with Google</p>
                            </a>
                        </div>
                        <div className="register">
                            <p>Not a registered user?</p>
                            <p>
                                <a href="/signup">Sign up Now!</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
