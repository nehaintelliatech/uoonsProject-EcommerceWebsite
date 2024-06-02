import { useState } from 'react';
import './LoginSignUp.css'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function LoginSignUp(){
    const [action, setAction]=useState('Sign Up');
    return(

        <div className="container">

            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

                {action==='Login'? <div></div> :
                    // username
                    <div className="input">
                    <span className='icons'><FaUser /></span>
                    <input type="text" placeholder="Name" />
                    </div>   
                }
                
                
                {/* email/phone */}
                <div className="input">
                    <span className='icons'> <MdEmail /> </span>
                    <input type = "text" placeholder = "Phone or Email" required pattern = "^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"/>
                </div>
                {/* password */}
                <div className="input">
                    <span className='icons'> <RiLockPasswordFill /> </span>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            
            {action==="Sign Up" ? <div></div> : 
             <div className="forgot-password">Forgot your password <span>Click Here !</span></div>
            }
            

            {/* submit container */}
            <div className="submit-container">

                <div className={action==="Login" ? "submit gray":"submit"}
                onClick={()=>setAction('Sign Up')}> Sign Up </div>

                <div className={action==="Sign Up" ?  "submit gray":"submit"}
                onClick={()=>setAction('Login')}> Login </div>
            </div>


        </div>

    );
}

export default LoginSignUp;