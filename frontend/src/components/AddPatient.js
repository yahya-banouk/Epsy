import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PatientService from '../services/PatientService'
import './addDoc.css'
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';



const AddPatient = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPassword] = useState('')
    const [cin, setCin] = useState('')
    const [tel, setTel] = useState('')
    const [dateNaissance, setDateNaissance] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')
    const [situation, setSituation] = useState('')
    const history = useNavigate();

    const savePatient = (e) => {
        e.preventDefault();

        const patient = {nom, prenom,password,cin,tel,dateNaissance,sex,situation,email}

        
            PatientService.addPatient(patient).then((response) => {
                history('/patients')
            }).catch(error => {
                console.log(error)
            })

        
        
    }

    useEffect(() => {

        PatientService.getPatientById(email).then((response) =>{
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setPassword(response.data.password)
            setTel(response.data.tel)
            setCin(response.data.cin)
            setSituation(response.data.situation)
            setSex(response.data.sex)
            setDateNaissance(response.data.dateNaissance)

        }).catch(error => { 
            console.log(error)
        })
    }, [])

   

    return (
        <div>
            <HeaderComponent/>
        <div className="bd">
<div className="con">
<div className="title">Add Patient</div>

	<form >
	<div className="doc-details">
	  <div className="input-box">
	    <span className="details">First name </span>
	    <input type="text" name="nom" placeholder='First name' required value={nom} onChange={(e) => setNom(e.target.value)}/>
	    
	    
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Last name </span>
	    <input type="text" name="prenom" placeholder='Last name' required value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Email</span>
	    <input type="email" name="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Date of Birth</span>
	    <input type="date" name="datenaissance" required placeholder='Date of birth' value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Password</span>
	    <input type="text" name="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">CIN</span>
	    <input type="text" name="cin" required placeholder='Cin' value={cin} onChange={(e) => setCin(e.target.value)}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Phone Number</span>
	    <input type="text" name="tel" required placeholder='Phone Number' value={tel} onChange={(e) => setTel(e.target.value)}/>
	    
	  
	  </div>
      <div className="input-box">
	    <span className="details">Situation</span>
	    <input type="text" name="situation" required placeholder='Married, Single, divorced' value={situation} onChange={(e) => setSituation(e.target.value)}/>
	    
	  
	  </div>
      <div className="input-box">
	    <span className="details">Sexe</span>
	    <input type="text" name="sex" required placeholder='Female or Male ' value={sex} onChange={(e) => setSex(e.target.value)}/>
	    
	  
	  </div>
	
	</div>
	<div className="button">
		
		<input type="submit" className="btn btn-success" onClick = {(e) => savePatient(e)}  value="save"/>{" "}
            &nbsp;
		<Link to="/patients" className='btn btn-outline-secondary'> Cancel </Link>

	
	
	</div>
	
</form>
	</div>
</div>
<FooterComponent/>
</div>

    )
}

export default AddPatient