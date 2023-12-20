import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './Component/Main';
import Signup from './Component/SignUp'
import Login from './Component/Login'

function App() {
  const user=localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path='/' exact element={<Main/>}></Route>}
     <Route path='/signup' exact element={<Signup />}></Route>
      <Route path='/login' exact element={<Login />}></Route>
      <Route path='/' exact element={<Navigate replace to="/login" />}></Route>


    </Routes>
  );
}

export default App;
