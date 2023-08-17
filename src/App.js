import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FirstSet from './Components/FirstSet/FirstSet';
import Terms from './Components/Terms/Terms';
import Privacy from './Components/Privacy/Privacy';
import Careers from './Components/Careers/Careers';

function App() {
  return (
    <div className="App">
   
   
   <Router>
   <Header/>
     <Routes>
    
          <Route path="/" exact element={<FirstSet/>} />
          <Route path="/terms" exact element={<Terms/>} />
          <Route path="/privacy" exact element={<Privacy/>} />
          <Route path="/career" exact element={<Careers/>} />

          {/* <Route path="*" exact element={<PageNotFound/>} /> */}

         
        </Routes>
 
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
