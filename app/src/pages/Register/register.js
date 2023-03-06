import React, { useState } from 'react';

import './register.module.css';



function Register() {
    const [Name, setName] = useState('');
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Mobile, setMobile] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form inputs
    const errors = {};

    

    if (Name.trim() === "") {
      errors.name = "Name is required";
    }

    if (UserName.trim() === "") {
      errors.username = "Username is required";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    }

    if (Mobile.trim() === "" ) {
      errors.mobile = "check the Mobile Number ";
    }
    if (isChecked) {
      // Form submission logic
    } else {
      errors.isChecked = " You have to accept the terms and conditions";
    }
    
    setErrorMessages(errors);

    // if there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
    }
  };
     //form
    return (
      <div>
        <div>
        <img src='https://i.postimg.cc/kXsHK6PS/project-sa.jpg' alt='super app'></img>
      <h2>Discover new things on <br></br> Superapp</h2>
      <h3>Already have an account? <button type="submit" style={{marginLeft:"21px",padding: "5px 30px 3px 20px"}}><b>LOGIN</b></button></h3>
      

        </div>
    
      <form onSubmit={handleSubmit}>
        <h1 >Super app</h1>
        <p >
          create your new account
        </p>
        <h4 >Email | Google</h4>
        
        <label>
          
          <input type="text" placeholder="Name" style={{width:"340px"}}value={Name} onChange={(event) => setName(event.target.value)}/>
          {errorMessages.name && (
          <div style={{ color: "red" ,marginLeft:"0%",marginTop:"-3%"}}>{errorMessages.name}</div>
          )}
         
        </label>
     
        <br/>
       
        <label>
          
          <input type="text" placeholder="UserName" style={{width:"340px"}}value={UserName} onChange={(event) => setUserName(event.target.value)}/>
        {errorMessages.username && (
          <div style={{ color: "red",marginLeft:"0%",marginTop:"-3%"  }}>{errorMessages.username}</div>
        )}
      
        </label>
        
        <br />
        
        <label >
          
          <input type="email" placeholder="Email" style={{width:"340px"}} className="myInput" value={email} onChange={(event) => setEmail(event.target.value)}/>
        {errorMessages.email && (
          <div style={{ color: "red" ,marginLeft:"0%" ,marginTop:"-3%"}}>{errorMessages.email}</div>
        )}
        </label>
       
        <br />
       
        <label > 
          
          <input type="text" placeholder="Mobile" style={{width:"340px"}} value={Mobile} onChange={(event) => setMobile(event.target.value)}/>
        {errorMessages.mobile && (
          <div style={{ color: "red",marginLeft:"0%",marginTop:"-3%"  }}>{errorMessages.mobile}</div>
        )}
        </label>
        
        <br />
       
        <input type="Checkbox" checked={isChecked}  onChange={handleCheckboxChange}/>
        {errorMessages.isChecked && (
          <div style={{ color: "red",marginLeft:"0%",marginTop:"-3%"  }}>{errorMessages.isChecked}</div>
        )} 
        <ol> <li>Share my registration data with Superapp</li><br></br></ol>
         
        <button type="submit" style={{width: "355px"}}><b>SIGN UP</b></button>
        <ul>
          <li>By clicking on Sign up. you agree to Superapp <a href='###'>Terms and</a> <br></br>
          <a href='###'>conditions</a> of Use</li><br></br>
          <li>To learn more about how Superapp collects, uses, shares and <br></br> protects your personal data please head Superapp <a href="##" >Privacy<br></br>Policy</a></li>
        </ul>
        
      </form>

      
      </div>
    
      
    );
  }
  
  export default Register;