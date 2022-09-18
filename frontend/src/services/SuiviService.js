import axios from "axios";
const SUIVI_API_BASE_URL =`${process.env.REACT_APP_LINK}/api/suivi`

class SuiviService {

    getTristesse(patient){
        
    
        return axios.get(SUIVI_API_BASE_URL+"/gettristesse",{params:patient});
    }

    getStress(patient){
        return axios.get(SUIVI_API_BASE_URL+"/getstress",{params:patient});
    }
    getSommeil(patient){
        return axios.get(SUIVI_API_BASE_URL+"/getsommeil",{params:patient});
    }
    getFatigue(patient){
        return axios.get(SUIVI_API_BASE_URL+"/getfatigue",{params:patient});
    }
    addSuiviPatient(suivi){
        return axios.post(SUIVI_API_BASE_URL,suivi);
    }
}
export default new SuiviService()