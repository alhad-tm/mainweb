import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';

import ProductsandServices from './Components/ProductandServices/ProductsandServices';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import FirstSet from './Components/FirstSet/FirstSet';
import Terms from './Components/Terms/Terms';

function App() {
  return (
    <div className="App">
   
   
   <Router>
   <Header/>
     <Routes>
    
          <Route path="/" exact element={<FirstSet/>} />
          <Route path="/terms" exact element={<Terms/>} />

          {/* <Route path="*" exact element={<PageNotFound/>} /> */}

         
        </Routes>

        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
