import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/User';
import NavBar from './components/navbar';
import HomePage from './pages/home';
import Login from './pages/Signin';
import Register from './pages/Signup';
import ProtectedRoute from './protectedRoutes';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
