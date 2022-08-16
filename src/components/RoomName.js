import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { saveRoomData } from '../actions/Actions';
import { useNavigate } from 'react-router-dom'

export const RoomName = () => {
    const roomNumber=useSelector((state) =>state.roomNumber)

    const [roomname,setRoomName] =useState()
    const dispatch=useDispatch()
  let navigate=useNavigate()

    const roomno=roomNumber.roomNumber.noofrooms;
    console.log("roomno",roomno);

    const submitHandler=(e)=>{
        if (roomname===""){
            alert("Please enter a room name")

        }else{
            dispatch(saveRoomData(roomname))
        }
    }
  return (
    <div>
        <h1>Enter room names</h1>
        <div className="row" style={{display:"block",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"100px"}} >
            <h3>Enter name of rooms :</h3>
            <input type="text"
             placeholder="Enter name of room" 
             value={roomname}
             onChange={(e)=>setRoomName(e.target.value)}
             style={{width:"30%",height:"10%",fontSize:"15px"}}/>
           <div style={{marginTop:"2%"}}>
           <button type="submit" class="btn btn-primary"style={{width:"100px"}} onClick={submitHandler}>Login</button>
             
    
           </div>
        </div>

    </div>
  )
}
