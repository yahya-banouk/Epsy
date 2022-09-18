import './App.css';
import React from 'react';
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';
import HomeAdmin from './components/HomeAdmin';
import ListDoc from './components/ListDoc';
import ListPatients from './components/ListPatients';
import AddDoctorCom from './components/AddDoctorCom';
import AddPatient from './components/AddPatient';
import UpdatePatient from './components/UpdatePatient';
import UpdateDoctorCom from './components/UpdateDoctorCom';
import Topbar from './components/topbar/Topbar';
import Sidbar from './components/sidbar/Sidbar';
import Home from './pages/home/Home';
import ReactDOM from "react-dom/client";
import PatientList from "./pages/patientList/PatientList";
import PatientProfile from "./pages/patientProfile/PatientProfile";
import RendezVous from "./pages/rendezVous/RendezVous"
import HeaderComponent from './components/HeaderComponent';
import PatientHome from './components/PatientHome';
import Appointement from './pages/Appointement';
import Suivi from './pages/Suivi';



function App() {
  return (
  
   <BrowserRouter>
      <Routes>
                  <Route path="/Register" exact element={<RegisterPage />} />
                  <Route path="/Login" exact element={<LoginPage />} />
                  <Route path='/admin' exact element={<HomeAdmin/>}></Route>
                  <Route path='/doctors' element={<ListDoc/>}></Route>
                  <Route path='/patients' element={<ListPatients/>}></Route>
                  <Route path='/add-doctor' element={<AddDoctorCom/>}></Route>
                  <Route path='/add-patient' element={<AddPatient/>}></Route>
                  <Route path='/update-patient/:email' element={<UpdatePatient/>}></Route>
                  <Route path='/update-doctor/:email' element={<UpdateDoctorCom/>}></Route>
                  <Route exact path="/doctor" element={<Home />}/>
                  <Route path="/patientsList" element={<PatientList />}/>
                  <Route path="/patientProfile/:email" element={<PatientProfile />}/>
                  <Route path="/redezVousList" element={<RendezVous />}/>
                  <Route path="/HeaderComponent" exact element={<HeaderComponent />} />
                  <Route path="/" exact element={<LandingPage />} />
                  <Route path="/about" exact element={<AboutUsPage />} />
                  <Route path="/contact" exact element={<ContactUsPage />} />
                  <Route exact path='/patient' element={<PatientHome/>}/>
                  <Route  path='/makeAppointement/:email' element={<Appointement/>}/>
                  <Route  path='/suivi' element={<Suivi/>}/>


      </Routes>
    </BrowserRouter>
  );
}




export default App;
