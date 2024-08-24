
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Mainpage } from "./pages/Mainpage";
import FAQSection from './pages/Faqs';
import { Privacy } from './pages/Privacy';
import { Ourcustomer } from './pages/Ourcustomers';
import { AboutUs } from './pages/AboutUs';
import { Loggedin } from './pages/Loggedin';
import { Patient } from './pages/Patient';

export const App = () =>{
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/home" element={<Mainpage />} />
          <Route path="/faqs" element={<FAQSection/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/ourcustomers" element={<Ourcustomer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/page1" element={<Loggedin/>}/>
          <Route path="/page1/:id" element={<Patient/>}/>
        </Routes>
      </Router>
    </>
  )
}