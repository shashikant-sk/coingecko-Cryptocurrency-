import React, { useState } from 'react';

const AuthForm = () => {
  const [login, setLogin] = useState(true); // To toggle between login and signup forms
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (authentication logic will go here)
    console.log('Form submitted:', { email, password, rememberMe });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">{login ? 'Login' : 'Sign Up'}</h2>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Remember Me Checkbox */}
          {login && (
            <div className="mb-4">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="text-sm text-gray-700" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          )}
          {/* Submit Button */}
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {login ? 'Login' : 'Sign Up'}
          </button>
          {/* Resend Confirmation Instructions */}
          <p className="text-sm text-center mt-4">
            Didn't receive confirmation instructions? Resend confirmation instructions
          </p>
        </form>
        {/* Toggle between Login and Sign Up */}
        <p className="text-sm text-center">
          {login ? "Don't have an account?" : 'Already have an account?'}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? 'Sign up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
