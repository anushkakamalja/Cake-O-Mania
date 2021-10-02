import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="flex min-h-screen">
            <img src="/images/login_bg.jpeg" alt="Cake" className="hidden md:block max-h-screen" />
            <div className="flex flex-col items-center w-full p-10">
                <h2 className="text-xl md:text-3xl text-center mt-4 font-body uppercase font-bold">
                    Welcome Back
                </h2>
                <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold">
                    Log into your account
                </h3>
                <form className="flex flex-col items-center pt-2 md:pt-8 w-full">
                    <input
                        className="font-body my-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                    />
                    <input
                        className="font-body my-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                    />
                    <input
                        type="submit"
                        value="Login"
                        className="font-body font-semibold tracking-wider w-full max-w-md uppercase py-2 md:py-4 px-4 md:px-6 mt-4 rounded bg-black text-white text-lg md:text-xl transition duration-500 hover:bg-gray-600 cursor-pointer"
                    />
                    <div className="flex pt-6 justify-between w-full max-w-md">
                        <a
                            href="/"
                            className="font-body text-gray-700 hover:text-black text-sm md:text-base">
                            Forgot password?
                        </a>
                        <a
                            href="/"
                            className="font-body text-gray-700 hover:text-black text-sm md:text-base">
                            Create new account
                        </a>
                    </div>
                </form>
                <hr className="w-full h-1 bg-black rounded-full my-6 block" />
                <div>
                    <p className="font-body font-bold text-center text-gray-800 pb-4">
                        Or continue with
                    </p>
                    <a
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/login`}
                        className="flex items-center space-between py-2 px-4 m-2 bg-white text-black hover:bg-gray-400 transition-all duration-500 rounded shadow-2xl border-2 border-gray-600 text-base font-semibold font-body cursor-pointer">
                        <FcGoogle
                            style={{ display: 'inline-block', marginRight: '8px' }}
                            size={21}
                        />
                        Google
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Login;
