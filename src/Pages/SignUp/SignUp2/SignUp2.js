import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './SignUp2.css'


const SignUp1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='SignUp2Heading'>
                    <h2 className='text-center my-4 '> Signup Form</h2>
                    </div>
                    <form >

                    <div className="d-flex mb-5">
                        <div className="">
                           <input type="number" class="form-control phoneCode" placeholder="+880" aria-label="First name" required/>
                        </div>
                        <div className="phoneInput">
                             <input type="number" className="form-control phoneNumber" placeholder="123xxxxx" aria-label="Last name" 
                             required/>
                        </div>
                 </div>
                       

                        <div>
                        <input className="form-control my-3" type="email" placeholder="Write email addresss" aria-label="default input example" 
                        required/>
                        </div>

                      <div className='d-flex justify-content-xxl-around nextStepBackButton'>
                      <div className=''>
                        <Link to= '/'>
                        <button type="button" class="btn btn-link fw-semibold text-secondary text-decoration-none "> Back </button>
                        </Link>
                          </div>
                        <div>
                          <Link to='/SignUp3'>
                          <button type="submit" class="btn btn-xl-lg btn-primary">Next step  <FontAwesomeIcon icon={faArrowRight}/></button>
                          </Link>
                        </div>
                      </div>

                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp1;