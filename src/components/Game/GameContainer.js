import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import Form from './Form'
import Word from './Word'
import {
    getRandomWord,
    guessCharacter
} from '../../actions/game'
import Hangman from './Hangman';

class GameContainer extends Component {
    state = { character: '' }
    componentDidMount() {
        this.props.getRandomWord()
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.guessCharacter(this.state.character)
        return this.setState({ character: '' })
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                {!this.props.gameWord &&
                    <Loader />
                }
                {(this.props.gameWord && this.props.status === 'open') &&
                    <div>
                        <h1>Guess the word</h1>
                        <p>You have {this.props.points/2} temptatives</p>
                        <Hangman points={this.props.points}/>
                        <Word word={this.props.displayWord} />
                        <Form
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            value={this.state.character}
                        />
                        <Word word={this.props.attempts} />
                    </div>
                }
                {(this.props.status && this.props.status !== 'open') &&
                    <div>
                        <h1>{this.props.status}</h1>
                        <Hangman points={this.props.points}/>
                        <h2>Your score: {this.props.points}</h2>
                        <h2>{this.props.gameWord}</h2>
                        <button onClick={this.props.getRandomWord} className='button'>Start a New Game</button>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        gameWord,
        displayWord,
        points,
        attempts,
        status } = state.game

    return {
        gameWord,
        displayWord,
        points,
        attempts,
        status
    }
}

export default connect(mapStateToProps, { getRandomWord, guessCharacter })(GameContainer)