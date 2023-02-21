import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Provider } from '../Context';

const Home = () => {
    const Cntext = useContext(Provider);
    const navigate = useNavigate();

const logout = () => {
    Cntext.logout();

    navigate("/login");
}

    return (
        <div>
            Home Page

            <p>Login User Id : {Cntext.user}</p>

            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default Home;
