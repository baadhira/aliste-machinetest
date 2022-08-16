import {APPLIANCE_SAVE, ROOM_NAME_SAVE, SAVE_MOBILE_NUMBER, SWITCHBOARD_NUMBER,ROOM_NUMBER_SAVE} from '../constants/Constant'


export const saveMobileNumber=(data) =>(dispatch) =>{
    dispatch({
        type: SAVE_MOBILE_NUMBER,
        payload: data
    })
    localStorage.setItem('saveMobileNumber',JSON.stringify(data))
}

export const saveRoomData=(data) =>(dispatch) =>{
    dispatch({
        type:ROOM_NAME_SAVE,
        payload: data
    })
   
}

export const saveRoomNumber=(data) =>(dispatch) =>{
    dispatch({
        type:ROOM_NUMBER_SAVE,
        payload: data
    })
   
}

export const saveSwitchBoardNumber=(data) =>(dispatch) =>{
    dispatch({
        type:SWITCHBOARD_NUMBER,
        payload: data
    })
    
}

export const saveAppliances=(data) =>(dispatch) =>{
    dispatch({
        type:APPLIANCE_SAVE,
        payload: data
    })
}