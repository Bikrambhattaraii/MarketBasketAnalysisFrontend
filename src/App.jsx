import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; 
import Account from './pages/Account';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Navbar } from './component/navbar';

function App() {
  const isUserSignedIn = !!localStorage.getItem('token');

  return (
    <div className='APP'>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
        {isUserSignedIn && <Route path={'/account'} element={<Account />} />}
      </Routes>
    </div>
  );
}

export default App;
