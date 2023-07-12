import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/User';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    return (
        user ? children : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
