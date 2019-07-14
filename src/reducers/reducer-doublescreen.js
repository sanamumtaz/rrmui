// for which user clicks double screen icon "action"
/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */
export default function (state = false, action) {
    switch(action.type) {
        case 'Selected_Double_Screen':
            state=action.payload;
            return state;

        default:
            state = false;
            return state;
    }
}