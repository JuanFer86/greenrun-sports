import { types } from '../helpers/types';

interface actionType {
    [key:string]: any
}

export const AppReducer = (state: actionType, action: actionType ) => {
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
    
        default:
            return state;
    }
}