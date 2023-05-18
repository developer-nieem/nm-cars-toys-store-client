import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} =  useContext(AuthContext);
    const location = useLocation();

    // loader 
    if (loading) {
        return <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }

    // redirect to page 
if (user) {
    return children
}
return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;