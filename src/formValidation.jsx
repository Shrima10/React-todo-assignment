// import React,{useState} from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import Login from './Webpages/login';
// const RegistrationForm=()=>{
//     const [fullname,setfullname]=useState('');
//     const [Email,setEmail]=useState('');
//     const [Password,setPassword]=useState('');
//     const [ConfirmPassword,setConfirmPassword]=useState('');
//     const [errors,seterrors]=useState({});
//     const navigate=useNavigate();
//     const validateform=()=>{
//         let errors={};
//         let isvalid=true;
//         if(!fullname){
//             errors.fullname='enter your fullname'
//             isvalid=false;
//         }
//         if(!Email){
//             errors.Email='enter your email'
//             isvalid=false;
//         }

//         if(Email.length>0){
//             if(!/\S+@\S+\.\S+/.test(Email)){
//             errors.Email='enter your email'
//             isvalid=false;
//             }
//         }
//         if(!Password){
//             errors.Password='enter your password'
//             isvalid=false;
//         }
//         if(!Password.length>0){
//             if(Password.length<6){
//                errors.Password='6 '
//             isvalid=false;}
//         }
        
//         if(!ConfirmPassword.length>0){
//             if(Password!=ConfirmPassword){
//                errors.ConfirmPassword='donot match'
//             isvalid=false;}
//         }
//         seterrors(errors);
//         return isvalid;
        
//     }
// const Handlesubmit=(event)=>{
// event.preventDefault();
// if (validateform()){
//     navigate('/login');

// }
// }
// return(
// <form  onSubmit={Handlesubmit}>
// <div className='form-group'>
//     <label htmlFor="fullname" className='form-label'>Name</label>
// <input type="text"
// className={`form-control ${errors.fullname ? 'error':' '}`}
// id="fullname"
// value={fullname}
// onChange={(event=>{ setfullname (event.target.value)})}/>
// {
//     errors.fullname && <span className='text-danger'>
//         {errors.fullname}
//     </span>
// }
// </div>
// <div className='form-group'>
//     <label htmlFor="email" className='form-label'>Email</label>
// <input type="email" 
// className={`form-control ${errors.Email ? 'error':' '}`}
// id="email"
// value={Email}
// onChange={(event=>{ setEmail (event.target.value)})}/>
// {
//     errors.Email && <span className='text-danger'>
//         {errors.Email}
//     </span>
// }
// </div>

// <div className='form-group'>
//     <label htmlFor="password" className='form-label'>Password</label>
// <input type="password"
// className={`form-control ${errors.Password ? 'error':' '}`}
// id="password"
// value={Password}
// onChange={(event=>{ setPassword (event.target.value)})}/>
// {
//     errors.Password && <span className='text-danger'>
//         {errors.Password}
//     </span>
// }
// </div>

// <div className='form-group'>
//     <label htmlFor="confirmpassword" className='form-label'>Confirm Password</label>
// <input type="password" 
// className={`form-control ${errors.ConfirmPassword ? 'error':' '}`}
// id="confirmpassword"
// value={ConfirmPassword}
// onChange={(event=>{ setConfirmPassword (event.target.value)})}/>
// {
//     errors.ConfirmPassword && <span className='text-danger'>
//         {errors.ConfirmPassword}
//     </span>
// }
// </div>
// <div>
//     <button type='submit' className='btn btn-primary'>Submit</button>
//     <button type='submit' className='btn btn-danger'>Close</button>
// </div>
// </form>
// )
// }
// export default RegistrationForm;