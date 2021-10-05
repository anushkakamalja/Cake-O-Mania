import React from 'react';
import { signUp } from '../../adapters/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useMutation } from 'react-query';
import { useRouter } from 'next/dist/client/router';
import link from '../../link';

const signUpWrapper = async (data) =>
    (await signUp(data.email, data.password, data.firstName, data.lastName, data.mobileNo)).data;

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors: formErrors }
    } = useForm();
    const router = useRouter();

    const mutation = useMutation(signUpWrapper, {
        retry: false,
        onSuccess: async () => {
            await router.push(link.login);
        },
        onError: async (error) => {
            alert(error?.response.data.message);
        }
    });
    const submitHandler = (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <img src="/images/login_bg.jpeg" alt="Cake" className="hidden md:block max-h-screen" />
            <div className="flex flex-col items-center w-full p-10 overflow-auto">
                <h2 className="text-xl md:text-3xl text-center mt-4 font-body font-bold">
                    Welcome to Cake-o-Mania!
                </h2>
                <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold">
                    Sign Up
                </h3>
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="flex flex-col items-center pt-2 md:pt-8 w-full max-w-md mx-auto">
                    <input
                        {...register('email', {
                            required: { value: true, message: 'Email is required' },
                            maxLength: {
                                value: 30,
                                message: 'Email should not have more than 30 characters'
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="email"
                        placeholder="Email"
                    />
                    {formErrors.email && (
                        <p className="text-red-500 self-start pt-2">{formErrors.email.message}</p>
                    )}
                    <input
                        {...register('firstName', {
                            required: { value: true, message: 'First name is required' },
                            maxLength: {
                                value: 30,
                                message: 'First name should not have more than 30 characters'
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="text"
                        placeholder="First Name"
                    />
                    {formErrors.firstName && (
                        <p className="text-red-500 self-start pt-2">
                            {formErrors.firstName.message}
                        </p>
                    )}
                    <input
                        {...register('lastName', {
                            required: { value: true, message: 'Last name is required' },
                            maxLength: {
                                value: 30,
                                message: 'Last name should not have more than 30 characters'
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="text"
                        placeholder="Last Name"
                    />
                    {formErrors.lastName && (
                        <p className="text-red-500 self-start pt-2">
                            {formErrors.lastName.message}
                        </p>
                    )}
                    <input
                        {...register('mobileNo', {
                            required: { value: true, message: 'Mobile number is required' },
                            minLength: {
                                value: 10,
                                message: 'Mobile number should have 10 characters'
                            },
                            maxLength: {
                                value: 10,
                                message: 'Mobile number should have 10 characters'
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="text"
                        placeholder="Mobile No"
                    />
                    {formErrors.mobileNo && (
                        <p className="text-red-500 self-start pt-2">
                            {formErrors.mobileNo.message}
                        </p>
                    )}
                    <input
                        {...register('password', {
                            required: { value: true, message: 'Password is required' },
                            minLength: {
                                value: 6,
                                message: 'Password should have atleast 6 characters'
                            },
                            maxLength: {
                                value: 30,
                                message: 'Password should not contain more than 30 characters'
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="password"
                        placeholder="Password"
                    />
                    {formErrors.password && (
                        <p className="text-red-500 self-start pt-2">
                            {formErrors.password.message}
                        </p>
                    )}
                    <input
                        {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'Confirm your password'
                            },
                            validate: {
                                matchPassword: (value) => {
                                    return value === watch('password') || "Passwords don't match";
                                }
                            }
                        })}
                        className="font-body mt-2 py-2 px-4 block w-full max-w-md rounded text-lg focus:ring-2 focus:border-transparent focus:ring-pink-500 outline-none border-2 border-gray-300 placeholder-gray-500"
                        type="password"
                        placeholder="Confirm password"
                    />
                    {formErrors.confirmPassword && (
                        <p className="text-red-500 self-start pt-2">
                            {formErrors.confirmPassword.message}
                        </p>
                    )}

                    <input
                        type="submit"
                        value="Sign Up"
                        disabled={mutation.isLoading || Object.keys(formErrors).length !== 0}
                        className="font-body font-semibold disabled:bg-gray-400 tracking-wider w-full max-w-md uppercase py-2 md:py-4 px-4 md:px-6 mt-4 rounded bg-black text-white text-lg md:text-xl transition duration-500 hover:bg-gray-600 cursor-pointer"
                    />
                    <div className="flex flex-col items-center pt-6 w-full max-w-md">
                        <p className="font-body text-gray-500 hover:text-black text-sm md:text-base">
                            Already have an account?
                        </p>
                        <a
                            href={link.login}
                            className="font-body text-gray-900 hover:text-black text-sm md:text-base">
                            Login here!
                        </a>
                    </div>
                </form>
                <hr className="w-full h-1 bg-black rounded-full my-6 block" />
                <div>
                    <p className="font-body font-bold text-center text-gray-800 pb-4">
                        Or continue with
                    </p>
                    <a
                        href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/signup`}
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
export default SignUp;
