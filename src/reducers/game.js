/**
 * Reducer for all the actions used for the game
 */

import {RANDOM_WORD} from '../actions/game'
const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case RANDOM_WORD: 
            return {...state, ...action.payload}
        default:
            return state
    }
}