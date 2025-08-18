import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Components/Frontpage/Front";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
import Login from "./Components/Support/Login"; 

import SignUp from "./Components/Support/SignUp";


import HistoricalReports from "./Components/Support/HistoricalReports"; 
import Overview from "./Components/Support/Overview";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} /> 
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/historical-reports" element={<HistoricalReports />} />
        <Route path="/overview" element={<Overview />} />

        
        
      </Routes>
    </Router>
  );
}

export default App;
