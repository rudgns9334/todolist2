import { createStore } from "./node_modules/redux";

const $dateInfo = new Date();
const initialState = {
    items: [],
    clock: [{
        hour: $dateInfo.getHours()<10?"0"+$dateInfo.getHours():$dateInfo.getHours(),
        min: $dateInfo.getMinutes()<10?"0"+$dateInfo.getMinutes():$dateInfo.getMinutes(),
        sec: $dateInfo.getSeconds()<10?"0"+$dateInfo.getSeconds():$dateInfo.getSeconds(),
        year: $dateInfo.getFullYear(),
        month: $dateInfo.getMonth()+1,
        date: $dateInfo.getDate()
    }]
}

function reducer(state=initialState, action){
    switch (action.type){
        case CLOCK:
            
            return {
                ...state,
                clock:newClock
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export { store };