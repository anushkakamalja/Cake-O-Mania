const Login = () => {
    return (
        <div className=" flex flex-row w-full h-auto overflow-hidden m-0 ">
            <div className=" w-2/3 bg-login-bg bg-no-repeat h-screen"></div>
            <div className="p-10 w-full text-center ">
                <div className="font-bold  ">
                    <p className="text-3xl my-4 font-body">Welcome to Cake-o-Mania!</p>
                    <h2 className="text-5xl my-4 font-header">Sign Up</h2>
                </div>
                <form className=" flex flex-col h-full" action="" method="POST">
                    <div className="pt-2 block  flex flex-col items-center">
                        <input
                            className="font-body mt-4 py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            length="200"
                            required></input>
                        <input
                            className="font-body mt-4 py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            autoComplete="off"
                            length="200"
                            required></input>
                        <input
                            className="font-body mt-4 py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            autoComplete="off"
                            length="200"
                            required></input>
                        <input
                            className="font-body mt-4  py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="password"
                            name="password"
                            placeholder="Password"
                            length="20"
                            required></input>
                        <input
                            className="font-body mt-4  py-1 border-gray border-2 rounded-md w-3/5 px-4 text-lg"
                            type="password"
                            name="confirm_password"
                            placeholder="Password"
                            length="20"
                            required></input>
                    </div>

                    <div>
                        <button
                            className="transition duration-500 ease-in-out text-xl font-header rounded-2xl m-4 px-4 py-2 bg-black text-white hover:bg-myCyan-100 transform hover:-translate-y-1 hover:scale-110 "
                            type="submit"
                            id="login-button">
                            Sign Up
                        </button>

                        <div className="m-auto h-10  w-3/5  content-center	">
                            <hr className=" w-full"></hr>
                            <p className="text-xl">OR</p>
                            <hr className="w-full"></hr>
                        </div>
                        <div className="">
                            <a href="/auth/google">
                                <button
                                    className=" transition duration-500 ease-in-out text-xl font-header rounded-2xl m-4 px-4 py-2 bg-black text-white hover:bg-myCyan-100 transform hover:-translate-y-1 hover:scale-110 "
                                    type="submit">
                                    Sign Up with Google
                                </button>
                            </a>
                        </div>
                        <div className="hover:bg-red font-body text-lg flex flex-row justify-between w-2/5 m-auto">
                            <p>Already have an account?</p>
                            <p>
                                <a
                                    href="/signup"
                                    className="p-1 underline transform transition duration-500 hover:scale-110 hover:bg-black hover:text-white ">
                                    Log In Here!
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
