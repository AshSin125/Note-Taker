import React, { useState } from 'react'
import axios from 'axios'


const Loginpage = () => {

  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmithandler = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      if (state === 'Sign Up') {
        const response = await axios.post('http://localhost:3001/api/register', { name, email, password });
        if (response.data.success) {
          console.log('Registration successful:', response.data);
        } else {
          console.error('Registration failed:', response.data.message);
        }
      } else {
        const response = await axios.post('http://localhost:3001/api/login', { email, password });
        if (response.data.success) {
          console.log('Login successful:', response.data);
          // Redirect to dashboard or home page
        } else {
          console.error('Login failed:', response.data.message);
        }
      }
    } catch (error) {
      console.error('API Error:', error.response?.data?.message || error.message);
    }
    

  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 min-h-96 border border-gray-200">
      
        <form className="space-y-4" onSubmit={onSubmithandler}>
            <h1 className="text-center text-3xl font-bold mb-6"> {state === 'Sign Up' ? ( 'Create Account' ) : ( 'Login' )}</h1>
         
          {state === 'Sign Up' && (
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>
        </form>
        {state === 'Sign Up' ? (    <p className='text-gray-400 text-center text-xs mt-4'>Already have an Account {""}
          <span onClick={()=> setState('Login')} className='text-blue-400 cursor-pointer underline'>Login here</span>
        </p>) : 
        (  <p className='text-gray-400 text-center text-xs mt-4'>Don't have an Account? {""}
          <span onClick={()=> setState('Sign Up')} className='text-blue-400 cursor-pointer underline'>Sign up</span>
        </p>)}

      </div>
    </div>
  )
}

export default Loginpage