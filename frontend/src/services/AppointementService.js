import axios from 'axios'
const APP_API_BASE_URL =`${process.env.REACT_APP_LINK}/rv`

class AppointementService{

    
    getLatestAppointements(){
        return  axios.get(APP_API_BASE_URL+"/latestappointment");
      }
    getAppointementCount(){
        return axios.get(APP_API_BASE_URL+"/appointmentcount").catch((error)=>console.log("get rv err" + error));
    }
    getInvitationsCount(){
        return axios.get(APP_API_BASE_URL+"/invitationcount").catch((error)=>console.log("get inv err" + error));
    }

    sendAppointement(appointement){
        for(var property in appointement) {
            console.log(property + "=" + appointement[property]);
        }
        
        return axios.post(APP_API_BASE_URL+"/sendAppointmentRequest",appointement).catch((error)=>console.log("post inv err" + error));
    }
    getRendezVousNotificationByDoctor(){
        return axios.get(APP_API_BASE_URL+"/rendezvous");
    }

    acceptAppointement(appointement){
        for(var property in appointement) {
            console.log(property + "=" + appointement[property]);
        }
        return axios.post(APP_API_BASE_URL+"/acceptappointment", appointement);
    }
    denyAppointement(appointement){
        return axios.post(APP_API_BASE_URL+"/denyappointment", appointement);
    }
}
export default new AppointementService()