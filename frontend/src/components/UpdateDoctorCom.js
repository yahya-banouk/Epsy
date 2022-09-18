import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DoctorService from '../services/DoctorService'
import './addDoc.css'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

const UpdateDoctorCom = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPassword] = useState('')
    const [cin, setCin] = useState('')
    const [tel, setTel] = useState('')
    const [specialite, setSpecialite] = useState('')
    const history = useNavigate();
    const {email} = useParams();

    const saveOrUpdatedoctor = (e) => {
        e.preventDefault();

        const doctor = {nom, prenom,password,cin,tel,specialite,email}

        
            DoctorService.updateDoctor(email, doctor).then((response) => {
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
        
        <div className='upd' >
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
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
                                        disabled
                                        placeholder = "Enter Password"
                                        name = "password"
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
                                    <label className = "form-label"> Speciality :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter speciality"
                                        name = "specialite"
                                        className = "form-control"
                                        value = {specialite}
                                        onChange = {(e) => setSpecialite(e.target.value)}
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
                                

                                

                                <button className = "btn btn-outline-warning" style={{margin:"10px"}} onClick = {(e) => saveOrUpdatedoctor(e)} >Submit </button>
                                <Link to="/doctors" className="btn btn-outline-info"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
        
        
        </div>
    )
}

export default UpdateDoctorCom