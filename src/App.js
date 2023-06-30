import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import View from './pages/View';
import TravelLog from './pages/TravelLog';
import Login from './pages/Login';
function App() {
  return (
<div className="App">

      <BrowserRouter basename='/'>
        <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route path='/users' element={<Home/>}></Route>
      <Route path='/users/create' element={<AddUser/>}></Route>
      <Route path='/user/update/:id' element={<EditUser/>}></Route>
      <Route path='/user/get/:id' element={<View/>}></Route>
      <Route path='/travel/:id' element={<TravelLog/>}></Route>
      </Routes>
     </BrowserRouter>
          
    </div>
  );
}

export default App;
