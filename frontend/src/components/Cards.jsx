import React, { Component } from 'react';
import Card from './CardUI'
import log from '../assets/log.svg'
import register from '../assets/register.svg'





class Cards extends Component {
    
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card lien="/doctors" imgsrc={log} title="Doctors" text="Doctor management area"/>
                    </div>
                    <div className='col-md-4'>
                        <Card lien="/patients" imgsrc={register} title="Patients" text="Patient management area"/>
                    </div>
         


                </div>
                
            </div>
        );
    }
}

export default Cards;