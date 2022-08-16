import React, { useState } from 'react'
import companylogo from '../assets/aliste.png'
import { saveMobileNumber } from '../actions/Actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Login = () => {
  let navigate=useNavigate()

  const number=useSelector(state=>state.number)

  const {mobileNumber}=number

  const dispatch=useDispatch()

  const [mobile,setMobile]=useState(mobileNumber.mobile)

  const submitHandler=(e)=>{
    if(mobile===""){
      alert("Enter mobile number")
    }
    else if(mobile.length!=10){
      alert("Mobile number must be at least 10 characters")
    }
    else{
    dispatch(saveMobileNumber({mobile}))
    navigate('/rooms')
    }
  }

  return (
    <div style={{marginTop:"100px"}}>
    <div style={{display:"block",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className="row" style={{display:"block",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Welcome to 
                <span style={{color:"dodgerblue"}}> Aliste Smart Home</span> </h1>
                <img src={companylogo} style={{width:"10%",height:"10%"}}alt="logo"/>

               
        </div>
        <div className="row" style={{display:"block",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
            <input type="number"
             placeholder="Enter phone number" 
             value={mobile}
             onChange={(e)=>setMobile(e.target.value)}
             style={{width:"30%",height:"10%",fontSize:"15px"}}/>
           <div style={{marginTop:"2%"}}>
           <button type="submit" class="btn btn-primary"style={{width:"100px"}} onClick={submitHandler}>Login</button>
           </div>
        </div>
    </div>
    </div>
  )
}
