import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import { Provider } from '../Context';

const AuthUser = (props) => {
const navigate = useNavigate();
const context = useContext(Provider);

useEffect(() => {
    if(context.user == null){
        navigate("/login");
    }
})

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default AuthUser;
