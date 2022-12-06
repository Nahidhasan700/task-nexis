import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




const SignUp1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='SignUp1Heading'>
                    <h2 className="text-center my-5"> Signup Form 1</h2>
                    </div>
                    <form >
                        <div className='mb-5'>
                        <input required className="form-control my-3 mb-5 " type="text" placeholder="Write First Name" aria-label="default input example"   />
                        <input className="form-control pt-4" type="text" placeholder="Write Last Name" aria-label="default input example" required />
                        </div>

                    <div className='d-flex justify-content-center my-3'>
                       
                        <Link to='/SignUp2'>
                        <button type="button" class="btn btn-primary btn-xl-lg nextStepButton">Next step <FontAwesomeIcon icon={faArrowRight}/>  </button> 
                        </Link>
                    </div>

                    </form>
                    <div className='d-flex justify-content-center'>
                        <p className='pt-2 text-secondary text-decoration-none'> Aleady have an Account ? </p>
                        <Link to= '/Login'>
                        <button type="button" class="btn btn-link fw-semibold">Login here  </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp1;