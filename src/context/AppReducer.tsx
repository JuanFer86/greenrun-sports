import { types } from '../helpers/types';
import { typeState } from './AppContext';

interface actionType {
    [key:string]: any
}

interface typeAction{
    type: string,
    payload: actionType
}

export const AppReducer = (state: typeState, action: typeAction ) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                ...state,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }

        case types.toggleTheme:
            return {
                ...state,
                theme: !state.theme
            }

        case types.addSports:
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state;
    }
}