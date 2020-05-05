import React from 'react';
import './App.css';
import bestof from './best.PNG'
import Form from './Form';
const  Contact = () =>{
    return(
        <div>
             <div>
              <br>
              </br>
              <img  src={bestof}  className="custom" alt="ahh"/>
              </div>
              <div>
                  <h1 className='titre'>PROGRAM INQUIRIES?</h1>
                  <h2 className='text'>Need to get in contact regarding further details of purchasing a program? Please use this email form for business inquiries only.</h2>
              </div>
              <div>
             <Form />
              </div>
        </div>

    );
}
export default Contact;