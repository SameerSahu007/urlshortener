import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyLinks from './components/MyLinks';
import bgimage from './images/bgimage.jpg'

function App() {

  return (
    <div className="bg-black w-screen h-screen font-poppins">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/mylinks' element={<MyLinks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
