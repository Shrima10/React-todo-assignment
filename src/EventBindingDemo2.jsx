// import React,{ useState } from "react";
// const EventBindingDemo2=()=>{
//     const[inputValue,setInputValue]=useState('');
//     const handleInputChange=(event)=>{
//         setInputValue(event.target.value);
//         console.log('inputValue',inputValue)
//     };
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         alert(`form Submitted: ${inputValue}`);
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Enter the Name</label>
//                 <input type='text' className="form-control" onChange={handleInputChange}>
//                 </input>
//                 <button type="submit" class="btn btn-success">Register</button>
//             </form>
//         </div>
//     )
// }
// export default EventBindingDemo2;