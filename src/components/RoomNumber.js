import React, { useState } from 'react'
import {saveRoomNumber} from '../actions/Actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export const RoomNumber = () => {

  const dispatch=useDispatch()
  let navigate=useNavigate()



  const [noofrooms,setNoofrooms]=useState("")

  const submitHandler=(e)=>{
    if (noofrooms===""){
      alert("Please enter room number")
    }
    else{
      dispatch(saveRoomNumber({noofrooms}))
      navigate('/roomname')

    }
  }

  return (
    <div>
           <div className="row" style={{display:"block",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}} >
            <h3>Enter no of rooms :</h3>
            <input type="number"
             placeholder="Enter number of rooms" 
             value={noofrooms}
             onChange={(e)=>setNoofrooms(e.target.value)}
             style={{width:"30%",height:"10%",fontSize:"15px"}}/>
           <div style={{marginTop:"2%"}}>
           <button type="submit" class="btn btn-primary"style={{width:"100px"}} onClick={submitHandler}>Login</button>
             
    
           </div>
        </div>
    </div>
  )
}
