import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, useNavigate } from "react-router-dom";
import { inseptorAxios } from "./inseptorAxios";
const initialState = { username: "", password: "" };
const msgError = "";

export const Signin = () => {
  const login =true;
  const [form, setForm] = useState(initialState);
  const [msgError, setMsgError] = useState("");
  const navigate = useNavigate();
  const validate = Yup.object().shape({
    username: Yup.string()
      .email("username is invalid")
      .required("username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    /* axios
      .get("http://localhost:8080/user/home", {
        auth: {
          username: values.username,
          password: values.password,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.role[0].authority === "patient") {
            navigate("/HeaderCompoenent");
          }
        }
        //console.log(res.data.role[0].authority)
        else if (res.status == 401) console.log(res.data.role[0]);
      })
      .catch((e) => {
        setMsgError("Email or password is incorrect");
      });*/
    try {
      const hone =`${process.env.REACT_APP_LINK}/user/home`
      console.log("URL"+ hone)
      const rest = await axios.get(hone, {
        auth: {
          username: values.username,
          password: values.password,
        },
      });
      if (rest.status === 200) {

        inseptorAxios(values.username, values.password);

       /* console.log("ana hna");
        axios.defaults.params = {password :"hiba", username:"doc@gmail.com"};
        

        console.log("ana hnaaa");
        axios.interceptors.request.use(function (config) {
          config={...config, ...{auth:{username:"doc@gmail.com",password:"hiba"}} } 

          return config;
           
        }, (error)=>{console.log("inseptor err " + error )});
        */
        console.log("ana redirect");  
        redirectToCorrectPage(rest, navigate);
} else if (rest.status === 401) console.log(rest.data.role[0]);
    } catch (e) {
      console.log(e);
      console.log("erreuuur hna");
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        //setForm({...form ,  prenom: values.prenom, nom: values.nom, email: values.email, password: values.password })
        handleSubmit(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign in</h1>
          <p className="text-danger text-center">{msgError}</p>
          <Form>
            <TextField label="Email" placeholder="Email" name="username" type="username" />
            <TextField label="Password" placeholder="Password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">
              Login
            </button>{" "}
            &nbsp;
          </Form>
        </div>
      )}
    </Formik>
  );
};
function redirectToCorrectPage(rest, navigate) {
  const role = rest.data.role[0].authority;
  if (role === "patient") {
    navigate("/patient");
  } else if (role === "admin") {
    navigate("/admin");
  } else {
    navigate("/doctor");
  }
}