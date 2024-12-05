import './App.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Components/SIgnin-Signup/Signup';
import Signin from './Components/SIgnin-Signin/Signin';
import Men from './Components/Men Section/Men';
import ProductPage from './Components/Product-Page/ProductPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import WishList from './Components/Wishlist/WishList';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/" element={<Men />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} /> 
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}
export default App
