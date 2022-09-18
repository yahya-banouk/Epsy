import '../App.css';
import React from 'react';
import helloimg from '../assets/hello.svg'
import { Signin } from '../components/Signin';
import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';


function LoginPage() {
  return (
    <div>
      <Header/>
      <br/><br/><br/><br/>
      <div className="container mt-3">
      <div className="row">
          <div className="col-md-5">
            <Signin/>
          </div>
          <div className="col-md-7 my-auto7">
            <img className="img-fluid w-80" src={helloimg}   alt=""/>
            
          </div>
      </div>
    </div>
      
    
       <FooterComponent/>
    </div>
  );
}




export default LoginPage;
