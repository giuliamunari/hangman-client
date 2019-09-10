/**
 * Reducer for all the actions used for the game
 */

import {
    RANDOM_WORD,
    WRONG_CHARACTER,
    RIGHT_CHARACTER,
    GAME_OVER,
    WIN
} from '../actions/game'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case RANDOM_WORD:
            return { ...state, ...action.payload }
        case WRONG_CHARACTER:
            return { ...state, ...action.payload }
        case RIGHT_CHARACTER:
            return { ...state, ...action.payload }
        case GAME_OVER:
            return { ...state, ...action.payload }
        case WIN:
            return { ...state, ...action.payload }
        default:
            return state
    }
}