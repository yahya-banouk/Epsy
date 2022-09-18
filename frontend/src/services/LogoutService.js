import axios from "axios";

class LogoutService{

    logout(){
        return axios.get(`${process.env.REACT_APP_LINK}/logout`)
    }

}
export default new LogoutService()