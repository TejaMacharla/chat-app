import './Login.css'
import assets from '../../assets/assets'
import { useState } from 'react';
import { login, signup} from '../../config/firebase';
const Login = () => {
    const[currState,setCurrState]=useState('Sign up')
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const onSubmit=(e)=>{
         e.preventDefault()
         if(currState==='Sign up'){
            signup(username,email,password);
         }else{
            login(email,password)
         }
    }

    return ( 
        <div className="login">
            <img src={assets.logo_big} alt="" className='logo' />
            <form onSubmit={onSubmit} className="login-form">
                <h2>{currState}</h2>
                {currState==='Sign up'?<input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" placeholder='username' required className="form-input" />:null }
                
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='email address' required className="form-input" />
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='password' required className="form-input" />
                <button type="submit">{currState==='Sign up'?'Create an account':'Login now'}</button>
                <div className="login-term">
                    <input type="checkbox" required/>
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-forgot">
                    {currState==='Sign up'?<p className='login-toggle'>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>:
                    <p className='login-toggle'>Create a new account. <span onClick={()=>setCurrState('Sign up')}>Click here</span></p>}
                </div>
            </form>
        </div>
     );
}
 
export default Login;