import Form from './components/Form';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App font-mono lg:mx-72
    md:mx-0 ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/login' element={<Login />} />
          <Route path ='signup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
