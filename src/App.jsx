import './App.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Components/SIgnin-Signup/Signup';
import Signin from './Components/SIgnin-Signin/Signin';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
export default App
