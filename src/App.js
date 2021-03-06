import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';
import Footer from './components/Home/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut'
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:checkoutId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
