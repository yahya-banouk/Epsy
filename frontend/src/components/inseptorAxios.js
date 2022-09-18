import { counterSlice} from "./counterSlice";
import store from "./store";
import axios from "axios";

export const inseptorAxios = (username,password)=>{
  console.log("this is in")
    const actions = counterSlice.actions;
    const action =  {type:'login2', payload:{username:username,password:password}}
    axios.defaults.env={USERNAME:username,PASSWORD:password}
    store.dispatch(actions.login(action));
        axios.interceptors.request.use(function (config) {
            const user = axios.defaults.env;
          config={...config, ...{auth:{username:user.USERNAME,password:user.PASSWORD}} }
          return config;
        });
}

