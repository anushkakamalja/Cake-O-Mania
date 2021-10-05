import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/dist/client/router';
import link from '../../../../link';
import { sendResetPasswordEmail } from '../../../../adapters/auth';

const sendResetPasswordEmailWrapper = async (email) => (await sendResetPasswordEmail(email)).data;

const PasswordResetPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: formErrors }
    } = useForm();
    const router = useRouter();

    const mutation = useMutation(sendResetPasswordEmailWrapper, {
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
        mutation.mutate(data.email);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <img src="/images/login_bg.jpeg" alt="Cake" className="hidden md:block max-h-screen" />
            <div className="flex flex-col items-center w-full p-10 overflow-auto">
                <h2 className="text-xl md:text-3xl text-center mt-4 font-body uppercase font-bold">
                    Reset your password
                </h2>
                <h3 className="text-3xl md:text-5xl text-center mt-2 font-body font-bold">
                    Provide your email to reset your password
                </h3>
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="flex flex-col items-center pt-8 md:pt-16 w-full max-w-md mx-auto">
                    <input
                        {...register('email', {
                            required: { value: true, message: 'Email is required' },
                            maxLength: {
                                value: 30,
                                message: 'Email should not be more than 30 characters'
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
