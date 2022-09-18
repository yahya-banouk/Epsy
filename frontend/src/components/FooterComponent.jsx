import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
       }
    render() {
        return (
            <div >
                
                <footer className='footer'>
                 
                      © 2022 MIOLACopyright:
                      <a className="text-reset fw-bold" href="/">
                       MiolaEPSY.com
                      </a>
                    


                </footer>
            </div>
        );
    }
}

export default FooterComponent;