import '../App.css';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ListDoc from './ListDoc';
import AddDoctorCom from './AddDoctorCom';
import UpdateDoctorCom from './UpdateDoctorCom';
import ListPatients from './ListPatients';
import HomeAdmin from './HomeAdmin';
import AddPatient from './AddPatient';
import UpdatePatient from './UpdatePatient';

function Admin() {
  return (
    <div>
      <Router>
        
           <HeaderComponent/>
    
              <div className="container">
                <Routes>
                  
                  <Route path='/admin' exact element={<HomeAdmin/>}></Route>
                  <Route path='/doctors' element={<ListDoc/>}></Route>
                  <Route path='/patients' element={<ListPatients/>}></Route>
                  <Route path='/add-doctor' element={<AddDoctorCom/>}></Route>
                  <Route path='/add-patient' element={<AddPatient/>}></Route>
                  <Route path='/update-patient/:email' element={<UpdatePatient/>}></Route>
                  <Route path='/update-doctor/:email' element={<UpdateDoctorCom/>}></Route>


                </Routes>
              </div>
            <FooterComponent/>
       
       </Router>
    </div>
  );
}

export default Admin;
