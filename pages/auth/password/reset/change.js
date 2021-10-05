import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/dist/client/router';
import link from '../../../../link';
import { resetPassword } from '../../../../adapters/auth';
import useKeyValPairFromUrlHash from '../../../../hooks/useKeyValPairFromUrlHash';

const resetPasswordWrapper = async ({ token, password }) =>
    (await resetPassword(token, password)).data;

const PasswordResetPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors: formErrors }
    } = useForm();
    const router = useRouter();
    const { token } = useKeyValPairFromUrlHash(router.asPath);
    const mutation = useMutation(resetPasswordWrapper, {
        retry: false,
        onSuccess: async (data) => {
            alert(data.message);
            await router.push(link.login);
        },
        onError: async (error) => {
            alert(error?.response.data.message);
            await router.push(link.home);
        }
    });
    const submitHandler = (data) => {
        mutation.mutate({ token, password: data.password });
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <img src="/images/login_bg.jpeg" alt="Cake" className="hidden md:block max-h-screen" />
            <div className="flex flex-col items-center w-full p-10 overflow-auto">
                <h2 className="text-xl md:text-3xl text-center mt-4 font-body uppercase font-bold">
                    Reset your password
                </h2>
                <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold">
                    Provide new password
                </h3>
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="flex flex-col items-center pt-8 md:pt-16 w-full max-w-md mx-auto">
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
                        value="Send Email"
                        className="font-body font-semibold tracking-wider disabled:bg-gray-400 w-full max-w-md uppercase py-2 md:py-4 px-4 md:px-6 mt-4 rounded bg-black text-white text-lg md:text-xl transition duration-500 hover:bg-gray-600 cursor-pointer"
                        disabled={mutation.isLoading || Object.keys(formErrors).length !== 0}
                    />
                </form>
            </div>
        </div>
    );
};
export default PasswordResetPage;
