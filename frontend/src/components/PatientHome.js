import './patienthome.css';
import Topbar from './topbar/Topbar';
import CardPatient from './CardPatient'
import SidbarPatient from './sidbar/SidbarPatient';



function PatientHome() {
  
  return (
   <div>
    <Topbar/>
<div className="homePatient">
  <div>
  <SidbarPatient />
  </div>
    
    <CardPatient />
   </div>
   
      
   
  
   </div>
   
  );
}

export default PatientHome;