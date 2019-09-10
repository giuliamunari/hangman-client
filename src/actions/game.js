import { words } from '../constants'

export const RANDOM_WORD = 'RANDOM_WORD'

export function getRandomWord () {
    const gameWord = words[Math.floor(Math.random() * words.length)]
    return {
        type: RANDOM_WORD,
        payload: {gameWord}
    } 
}
