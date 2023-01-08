import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home';
import PublicContent from './components/pure/publicContent';
import UserContent from './components/pure/userContent';
import AdminContent from './components/pure/adminContent';
import Login from './components/forms/login';
import Register from './components/forms/register';

function App() {

  return (
  <>
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route index element={<PublicContent></PublicContent>}></Route>
        <Route path='user' element={<UserContent></UserContent>}></Route>
        <Route path='admin' element={<AdminContent></AdminContent>}></Route>

        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Route>



    </Routes>
  </>
  );
}

export default App;
