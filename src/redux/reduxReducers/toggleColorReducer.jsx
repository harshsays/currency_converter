import { BG_COLOR,FONT_COLOR } from "../reduxActions/toggleColorActions/toggleColorActions";
const initialState={
    color:{
        BG_COLOR:"black",
        FONT_COLOR:"white"
    }
}
function toggleReducer(state=initialState,action){
    switch(action.type){
        case BG_COLOR:
            return {
                ...state,
                color:{
                    ...state.color,
                    BG_COLOR: action.color.value
                }
            };

            case FONT_COLOR:
            return {
                ...state,
                color:{
                    ...state.color,
                    FONT_COLOR: action.color.value
                }
            }

            default:{
                return state
            }
    }

}

export default toggleReducer;