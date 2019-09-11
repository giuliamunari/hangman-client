import { words } from '../constants'
export const RANDOM_WORD = 'RANDOM_WORD'
export const WRONG_CHARACTER = 'WRONG_CHARACTER'
export const RIGHT_CHARACTER = 'RIGHT_CHARACTER'
export const GAME_OVER = 'GAME_OVER'
export const WIN = 'WIN'

const wordPattern = (gameWord, displayWord, character) => {
    return displayWord.map((l, i) => {
        if (gameWord[i] === character) {
            return character
        }
        return l
    })
}

export const getRandomWord = () => dispatch => {
    const gameWord = words[Math.floor(Math.random() * words.length)]
    const displayWord = gameWord.split('').map(l => '_')
    dispatch({
        type: RANDOM_WORD,
        payload: {
            gameWord,
            displayWord,
            points: 10,
            attempts: [],
            status: 'open'
        }
    })
}

function wrongCharacter(character, state) {
    const { attempts, points } = state
    return {
        type: WRONG_CHARACTER,
        payload: {
            points: points - 2,
            attempts: [...attempts, character]
        }
    }
}

function rightCharacter(newPattern, state) {
    return {
        type: RIGHT_CHARACTER,
        payload: {
            displayWord: newPattern
        }
    }
}

function gameOver(character, state) {
    const { attempts, points } = state
    return {
        type: GAME_OVER,
        payload: {
            points: points - 2,
            attempts: [...attempts, character],
            status: 'Game Over'
        }
    }
}

function win() {
    return {
        type: WIN,
        payload: {
            status: 'You Won!'
        }
    }
}

export const guessCharacter = (character) => (dispatch, getState) => {
    const { gameWord, points, displayWord } = getState().game
    const condition = gameWord.split('').includes(character)

    if (!condition && points === 2) {
        return dispatch(
            gameOver(character, getState().game)
        )
    }

    if (!condition) {
        return dispatch(
            wrongCharacter(character, getState().game)
        )
    }

    const newPattern = wordPattern(gameWord, displayWord, character)

    if (newPattern.includes('_')) {
        return dispatch(
            rightCharacter(newPattern, getState().game)
        )
    }
    return dispatch(
        win()
    )


}