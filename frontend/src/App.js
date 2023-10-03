import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyLinks from './components/MyLinks';

function App() {
  return (
    <div className="App font-mono lg:w-3/4 min-w-[40%] mx-auto h-screen">
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
  );
}

export default App;
