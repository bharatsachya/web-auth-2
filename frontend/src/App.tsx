import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <Router>
      <nav className='text-center text-lg bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white shadow-md'>
        <Link to="/" className='hover:text-gray-300'>Home</Link> | <Link to="/login" className='hover:text-gray-300'>Login</Link> |{' '}
        <Link to="/signup" className='hover:text-gray-300'>Signup</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login onLogin={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={!!token}>
              <Dashboard token={token!} />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={
          <div className='font-bold text-center p-2 bg-gradient-to-r from-indigo-400 to-pink-500 flex items-center min-h-screen justify-center flex-col'>
            <h1 className='text-3xl'>Welcome to the App</h1>
            <h3 className='text-md'>This is the Task 2</h3>
            <div className='text-xl flex items-center p-2 justify-between bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-4'>
              <div className='mr-10'>How this works?</div>
              <ul className='text-left p-2'>
                <li>Try to route to '/dashboard' without the login credentials</li>
                <li>You can only reach protected route after you login</li>
                <li>Can also check for token inside the response of login page</li>
              </ul>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;