import axios from "axios";

const PATIENT_API_BASE_URL =`${process.env.REACT_APP_LINK}/patients`
class PatientService {

    getPatients(){
        return axios.get(PATIENT_API_BASE_URL);

    }
    addPatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }
    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/'+patientId);
    }
    updatePatient(patientId, patient){
        return axios.put(PATIENT_API_BASE_URL + '/' +patientId, patient);
    }
    deletePatient(patientId){
        return axios.delete(PATIENT_API_BASE_URL+'/'+patientId);
    
    }

    listPatient(){
        return axios.get(PATIENT_API_BASE_URL+'/patientof');
    }

    getNewMembers(){
        
        return axios.get(PATIENT_API_BASE_URL+'/newpatients').catch((error)=>console.log("axios err" + error));
    }
    getPatientsCount(){
        return axios.get(PATIENT_API_BASE_URL+"/patientcount").catch((error)=>console.log("get pat err" + error));
    }
}

export default new PatientService()