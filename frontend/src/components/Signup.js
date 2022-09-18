import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import {  useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import React, {  useState } from 'react';
import axios from 'axios';

const initialState = { prenom: '', nom: '', email: '', password: '', confirmPassword: '', cin:'' 
, tel:'' , situation:'' , sexe:'' };


export const Signup = () => {
    const [form, setForm] = useState(initialState);
  const validate = Yup.object().shape({
    prenom: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    nom: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
      tel: Yup.string()
      .max(15, "Must be 10 characters or less")
      .required("Required"),
    cin: Yup.string()
      .max(15, "Must be 7 characters or less")
      .required("Required"),
    situation: Yup.string().required("Required"),
  })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const history = useNavigate();

  const handleSubmit = (values) => {
  
       // e.preventDefault();
       const data={ prenom: values.prenom, nom:values.nom, email:values.email, password: values.password, confirmPassword: '', cin:values.cin 
       , tel:values.tel , situation:values.situation , sexe:values.sexe }
       
        
    console.log(data);
    
        axios.post(`${process.env.REACT_APP_LINK}/user/register`,data)
        .then(response => {
        if(response.data!=null){
          history('/Login');
        this.setState({"show":true});
        setTimeout(() => this.setState({"show":false}),3000);
        

        }
        else{
        this.setState({"show":false});
        }});
        this.setState(this.initialState);
    
  }
  return (
    <Formik
      initialValues={{
        prenom: '',
        nom: '',
        email: '',
        password: '',
        confirmPassword: '',
        cin:'',
        tel:'',
        situation:''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        //setForm({...form ,  prenom: values.prenom, nom: values.nom, email: values.email, password: values.password })
        handleSubmit(values)

      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form >
            <TextField  name="prenom" placeholder="First name" type="text"/>
            <TextField  name="nom" placeholder="Last name" type="text" />
            <TextField  name="email" type="email" placeholder="Email"/>
            <TextField  name="password" type="password" placeholder="Password"/>
            <TextField  name="confirmPassword" type="password" placeholder="Confirm password" />
            <TextField  name="tel" placeholder="Phone Number" type="text"/>
            <TextField  name="cin" placeholder="CIN" type="text"/>
            <TextField  name="situation" placeholder="RelationShip status" type="text"/>
            <div style={{marginBottom:"5%"}}>
            <button className="btn btn-dark mt-3" type="submit">Register</button> &nbsp;
            <button className="btn btn-outline-primary mt-3 ml-3" type="reset">Reset</button>
            </div>
            
          </Form>
        </div>
      )}
    </Formik>
    
  );

}