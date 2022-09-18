import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import PatientService from '../services/PatientService'
import './addDoc.css'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

const UpdatePatient = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPassword] = useState('')
    const [cin, setCin] = useState('')
    const [tel, setTel] = useState('')
    const [dateNaissance, setDateNaissance] = useState('')
    const [sex, setSex] = useState('')
    const [situation, setSituation] = useState('')
    const history = useNavigate();
    const {email} = useParams();

    const savePatient = (e) => {
        e.preventDefault();

        const patient = {nom, prenom,password,cin,tel,dateNaissance,sex,situation,email}

        
            PatientService.updatePatient(email, patient).then((response) => {
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
       
        <div className='upd'>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "nom"
                                        className = "form-control"
                                        value = {nom}
                                        onChange = {(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "prenom"
                                        className = "form-control"
                                        value = {prenom}
                                        onChange = {(e) => setPrenom(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Password"
                                        name = "password"
                                        disabled
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone Number :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter phone number"
                                        name = "tel"
                                        className = "form-control"
                                        value = {tel}
                                        onChange = {(e) => setTel(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Cin :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Cin"
                                        name = "cin"
                                        className = "form-control"
                                        value = {cin}
                                        onChange = {(e) => setCin(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date of Birth :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter date of birth"
                                        name = "dateNaissance"
                                        className = "form-control"
                                        value = {dateNaissance}
                                        onChange = {(e) => setDateNaissance(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Gender :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter gender"
                                        name = "sex"
                                        className = "form-control"
                                        value = {sex}
                                        onChange = {(e) => setSex(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Situation:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter situation"
                                        name = "situation"
                                        className = "form-control"
                                        value = {situation}
                                        onChange = {(e) => setSituation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "text"
                                        
                                        name = "cin"
                                        disabled
                                        className = "form-control"
                                        value = {email}
                                       
                                    >
                                    </input>
                                </div>
                                

                                

                                <button className = "btn btn-outline-warning"  onClick = {(e) => savePatient(e)} >Submit </button>{" "}
            &nbsp; 
                                <Link to="/patients" className="btn btn-outline-info" style={{margin :"10px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
        </div>
    )
}

export default UpdatePatient