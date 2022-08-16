import {APPLIANCE_SAVE, ROOM_NAME_SAVE, SAVE_MOBILE_NUMBER, SWITCHBOARD_NUMBER,ROOM_NUMBER_SAVE} from '../constants/Constant'

export const saveMobileNumber=(state={mobileNumber:{}},action)=>{

    switch(action.type){
        case SAVE_MOBILE_NUMBER:
            return{
                ...state,
                mobileNumber:action.payload
            }
        default:
            return state

    }
}

export const saveRoomNumber=(state={roomNumber:null},action)=>{
    switch(action.type){
        case ROOM_NUMBER_SAVE:
            return{
                ...state,
                roomNumber:action.payload
            }
        default:
            return state
    }
}

export const saveRoomDetail = (state={roomdetail:{roomName:null,switchboards:[{switchboardNumber:null,appliance:{}}]}}, action) =>{
    switch(action.type){
        case ROOM_NAME_SAVE:
            return{
                ...state,
                roomName:action.payload
            }
        case SWITCHBOARD_NUMBER:
            return{
                ...state,
                switchboardNumber:action.payload,
            }
        case APPLIANCE_SAVE:
            return{
                ...state,
                appliance:action.payload
            }
        default:
            return state
    }

}


