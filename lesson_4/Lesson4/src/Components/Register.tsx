import React from "react";

const CreateAccountForm: React.FC = () => {
  return (
    <section className="bg-gray-900 flex items-center justify-center min-h-screen py-8">
      <div className="bg-gray-800 rounded-lg shadow-md w-full max-w-md px-6 py-8">
        <div className="flex items-center mb-6">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="Flowbite Logo"
          />
          <h2 className="text-white text-2xl font-semibold">Flowbite</h2>
        </div>
        <h1 className="text-white text-xl font-bold mb-2">
          Create your Account
        </h1>
        <p className="text-gray-400 text-sm mb-4">
          Start your website in seconds. Already have an account?{" "}
          <a href="#" className="text-primary-500 hover:underline">
            Login here
          </a>
          .
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="e.g. Bonnie Green"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
              >
                <option value="">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center my-4">
            <hr className="w-1/2 border-gray-600" />
            <p className="text-gray-400 mx-4">or</p>
            <hr className="w-1/2 border-gray-600" />
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center w-full"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 135c0-32.5-26.3-58.9-58.9-58.9h-348.3c-32.5 0-58.9 26.3-58.9 58.9v242c0 32.5 26.3 58.9 58.9 58.9h348.3c32.5 0 58.9-26.3 58.9-58.9V135zM139.1 278.9l-22.9 85.1c-1.2 4.5-4.5 7.9-8.8 8.4-4.3.5-8.7-2.2-10.6-6.5l-75.3-280.2c-2.4-9.1 2-18.2 10.5-22.4 8.6-4.1 18.3-3.6 26.6 1.3l85.1 22.9c4.4 1.2 7.8 4.5 8.4 8.8.5 4.3-2.2 8.7-6.5 10.6zm320.2-68.2V384h-83.3v-95.1h-83.3v-56h166.6c2.2-1.1 4.3-2.3 6.1-3.7 5.9-4.4 10.1-10.5 13-17.3 3-6.9 3.5-14.7 1.1-21.9-2.4-7.2-6.9-13.4-13-17.3-6.1-4.6-14.1-7.4-22.9-7.4h-83.3V135h171.6c32.5 0 58.9 26.3 58.9 58.9 0 15.1-5.7 29.7-15.8 40.4z"
                ></path>
              </svg>
              Sign up with Google
            </button>
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center w-full mt-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-7.8-10-19.4-16.2-30.7-17.9-12.4-1.7-24.9-1.1-37.1 5.8-26.1 15.1-44.8 38.4-54.8 62.8-10.3 25.1-29.7 53-58.9 74.3-29.2 21.4-60.8 38.8-87.7 50.5-26.9 11.7-53.7 16.1-80.1 16.1c-9.7 0-28.3-6.8-49.9-20.1-21.6-13.4-37.8-30.6-45.1-48.5-7.2-17.9-8.5-37.5-2.4-38.5 6.1-1 12.6 3.7 19.3 10.5 26.3 26.5 59.4 53.3 59.4 53.3 59.4 12.5-8.9 19.4-22.9 17.3-37.9-2.1-15.1-18.4-12.2-34.4 3.8-16.1 16-29.1 32.8-31.4 48.8-2.4 16-11.2 26.8-24.3 32.5-13.1 5.7-28.2 3.7-40.8-3.9-12.6-7.7-24.7-16-34.6-25.4 10.3-11.2 21.4-22.5 33.5-33.4 12.1-10.9 24.8-22.4 38.1-33.4 13.3-11 26.6-22.7 37.7-35.2 11.2-12.5 22.5-25.3 32.5-37.6 21.3-26.3 43.4-52.1 67.4-77.3 24-25.3 50.2-50.6 84.4-78.8 34.3-28.1 67.6-68 98.9-91.8 31.2-23.8 63-48.2 92.7-70.4 29.6-22.2 60.3-46.9 88.6-63.4 28.2-16.5 57.8-30.3 85.4-41.3 27.5-11 54.2-20.2 78.7-26.2 24.6-6 49.8-11 71.9-13.3 22.1-2.3 42.8-3.2 60.1-2.5 17.2.7 33.5 3.7 48.6 9 15.1 5.2 29.7 12.7 43.1 22.2 13.4 9.5 26.8 20.7 39.5 33.3 12.7 12.6 24.8 26.2 36.3 40.7 11.4 14.6 22.4 30.3 32.8 46.9s19.8 34.4 28.3 52.4c8.5 18 16.9 37.4 25.1 58.4 8.2 21 16.3 43.4 24.3 67.1 8 23.7 15.9 48.7 23.6 74.9z"
                ></path>
              </svg>
              Sign up with Apple
            </button>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-light text-gray-400">
                By signing up, you are creating a Flowbite account, and you
                agree to Flowbite's{" "}
                <a
                  className="font-medium text-primary-500 hover:underline"
                  href="#"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-primary-500 hover:underline"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="newsletter" className="font-light text-gray-400">
                Email me about product updates and resources.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create an account
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAccountForm;
