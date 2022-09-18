import ListDoctorCompenent from './components/ListDoctorCompenent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Topbar from './components/topbar/Topbar';
import Sidbar from './components/sidbar/Sidbar';
import Home from './pages/home/Home';
import ReactDOM from "react-dom/client";
import PatientList from "./pages/patientList/PatientList";
import PatientProfile from "./pages/patientProfile/PatientProfile";
import RendezVous from "./pages/rendezVous/RendezVous"

import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";


function Doctor() {
  
  return (
    <BrowserRouter>
    <Topbar/>
<div className="homeDoc">
    <Sidbar />
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/patients" element={<PatientList />}/>
    <Route path="/patientProfile/:email" element={<PatientProfile />}/>
    <Route path="/redezVousList" element={<RendezVous />}/>
    </Routes>
    
   </div>
    </BrowserRouter>
    
  );
}

export default Doctor;
