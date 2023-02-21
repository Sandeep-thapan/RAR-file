import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import AuthUser from './components/AuthUser';
import { useContext, useEffect } from 'react';
import { Provider } from './Context';

function App() {
  const context = useContext(Provider);

  useEffect(() => {
  }, [])

  if(context.loading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />


        <Route path='/' element={<AuthUser />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
