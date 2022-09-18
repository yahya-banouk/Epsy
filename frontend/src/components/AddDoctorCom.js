import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DoctorService from '../services/DoctorService'
import './addDoc.css'
import 'bootstrap/dist/css/bootstrap.css'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';



const AddDoctorCom = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPassword] = useState('')
    const [cin, setCin] = useState('')
    const [tel, setTel] = useState('')
    const [specialite, setSpecialite] = useState('')
    const [email, setEmail] = useState('')
    const history = useNavigate();

    const saveDoctor = (e) => {
        e.preventDefault();

        const doctor = {nom, prenom,password,cin,tel,specialite,email}

        
            DoctorService.addDoctor(doctor).then((response) => {
                history('/doctors')
            }).catch(error => {
                console.log(error)
            })

        
        
    }

    useEffect(() => {

        DoctorService.getDoctorById(email).then((response) =>{
            setNom(response.data.nom)
            setPrenom(response.data.prenom)
            setPassword(response.data.password)
            setTel(response.data.tel)
            setCin(response.data.cin)
            setSpecialite(response.data.specialite)

        }).catch(error => { 
            console.log(error)
        })
    }, [])

    const title = () => {

        if(email){
            return <h2 className = "text-center">Update doctor</h2>
        }else{
            return <h2 className = "text-center">Add doctor</h2>
        }
    }

    return (
      <div>
        <HeaderComponent/>
        <div className="bd">
<div className="con">
<div className="title">Add Doctor</div>

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
	    <span className="details">Speciality</span>
	    <input type="text" name="speciality" required placeholder='Speciality' value={specialite} onChange={(e) => setSpecialite(e.target.value)}/>
	    
	  
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
	
	</div>
	<div className="button">
		
		<input type="submit" className="btn btn-success" onClick = {(e) => saveDoctor(e)}  value="save"/>{" "}
            &nbsp;
		<Link to="/doctors" className='btn btn-outline-secondary'> Cancel </Link>

	
	
	</div>
	
</form>
	</div>
</div>
<FooterComponent/>
</div>

    )
}

export default AddDoctorCom