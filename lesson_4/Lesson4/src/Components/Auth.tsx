import { useState, useCallback } from 'react';

// A simple SVG icon component for demonstration
const GoogleIcon = () => (
  <svg className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 111.3 512 0 398.5 0 256S111.3 0 244 0c69.9 0 131.5 28.2 176.4 73.3l-66 66C314.6 114.5 281.8 96 244 96c-88.6 0-160 71.7-160 160s71.4 160 160 160c92.2 0 142.1-64.3 148.2-96.1H244v-64h243.6c1.3 7.8 2.4 15.9 2.4 24.1z"></path>
  </svg>
);

// A simple SVG icon component for demonstration
const AppleIcon = () => (
    <svg className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path fill="currentColor" d="M318.7 268.7c-7.8-10-19.4-16.2-30.7-17.9-12.4-1.7-24.9-1.1-37.1 5.8-26.1 15.1-44.8 38.4-54.8 62.8-10.3 25.1-29.7 53-58.9 74.3-29.2 21.4-60.8 38.8-87.7 50.5C53.7 448.6 26.9 453.1 0 453.1V512c29.2 0 58.3-5.3 85.3-15.8 27.1-10.5 52.7-25.2 75.8-43.5 23.1-18.3 43.5-39.7 60.9-63.5 17.4-23.8 31.6-49.8 42.6-77.9 11-28.1 18.8-57.8 23.3-88.5 4.5-30.7 5.7-61.9 3.5-92.8-2.2-30.9-7.7-61.1-16.5-90.6-8.8-29.5-20.9-57.9-36.2-84.4-15.3-26.5-33.6-51.1-54.8-73.4-21.2-22.3-45.2-42.3-71.8-59.5-26.6-17.2-55.6-31.5-86.8-42.7-31.2-11.2-64.2-18.9-98.9-23-34.7-4.1-69.9-4.8-104.5-2-34.6 2.8-68.5 9.1-100.4 18.7-31.9 9.6-61.8 22.5-88.8 38.1 29.2 24.5 55.4 51.7 77.8 80.6 22.4 28.9 41.1 60.3 55.7 93.5 14.6 33.2 25.1 68.2 31.3 104.1 6.2 35.9 7.9 72.3 5.3 108.5-2.6 36.2-9.6 71.6-20.9 105.7-11.3 34.1-26.7 66.8-46.1 97.4 33.9-1.7 67.2-8.5 98.7-20.3 31.5-11.8 61-28.5 87.8-49.8 26.8-21.3 50.7-46.9 71.1-76.3 20.4-29.4 37-62.4 49.2-98.1 12.2-35.7 19.8-73.4 22.6-112.5 2.8-39.1.5-78.9-7.8-117.9zM259.3 145.2c-27-28-56.1-43.3-88.9-43.3-33.1 0-63.8 15.6-89.8 44.8-26 29.2-42.9 63.8-42.9 101.4 0 38.5 17.8 74.3 46.1 104.1 28.3 29.8 60.3 45.4 94.3 45.4 32.3 0 63.8-14.8 89.8-44.1 26-29.3 42.2-64.4 42.2-102.1.1-38.6-15.4-74.5-40.8-104.1z"></path>
    </svg>
);


const AuthBox: React.FC = () => {
  const [variant, setVariant] = useState<'signIn' | 'signUp'>('signIn');

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) => (prevVariant === 'signIn' ? 'signUp' : 'signIn'));
  }, []);

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
              Flowbite
            </a>

            {/* Sign In Variant */}
            {variant === 'signIn' && (
              <>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                  Welcome back
                </h1>
                <p className="text-sm font-light text-gray-400">
                  Start your website in seconds. Don't have an account?{' '}
                  <a href="#" onClick={toggleVariant} className="font-medium text-primary-500 hover:underline">
                    Sign up
                  </a>
                </p>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400" required />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="w-full h-px bg-gray-600"></div>
                        <div className="px-3 text-sm text-gray-400">or</div>
                        <div className="w-full h-px bg-gray-600"></div>
                    </div>

                    <button type="button" className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                        <GoogleIcon />
                        Sign in with Google
                    </button>
                    <button type="button" className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                        <AppleIcon />
                        Sign in with Apple
                    </button>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-500 hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in to your account</button>
                </form>
              </>
            )}

            {/* Sign Up Variant */}
            {variant === 'signUp' && (
              <>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                  Create your Account
                </h1>
                <p className="text-sm font-light text-gray-400">
                  Start your website in seconds. Already have an account?{' '}
                  <a href="#" onClick={toggleVariant} className="font-medium text-primary-500 hover:underline">
                    Login here
                  </a>
                </p>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-white">Full Name</label>
                            <input type="text" name="fullName" id="fullName" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400" placeholder="e.g. Bonnie Green" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-white">Country</label>
                        <select id="country" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                            <option>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400" required />
                    </div>

                    <div className="flex items-center">
                        <div className="w-full h-px bg-gray-600"></div>
                        <div className="px-3 text-sm text-gray-400">or</div>
                        <div className="w-full h-px bg-gray-600"></div>
                    </div>

                    <button type="button" className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                        <GoogleIcon />
                        Sign up with Google
                    </button>
                    <button type="button" className="w-full text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                        <AppleIcon />
                        Sign up with Apple
                    </button>

                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 ring-offset-gray-800" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-400">By signing up, you are creating a Flowbite account, and you agree to Flowbite’s <a className="font-medium text-primary-500 hover:underline" href="#">Terms of Use</a> and <a className="font-medium text-primary-500 hover:underline" href="#">Privacy Policy</a>.</label>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="newsletter" className="font-light text-gray-400">Email me about product updates and resources.</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthBox;