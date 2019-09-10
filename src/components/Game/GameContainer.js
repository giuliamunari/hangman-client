import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import Form from './Form'
import Word from './Word'
import { 
    getRandomWord,
    guessCharacter
 } from '../../actions/game'

class GameContainer extends Component {
    state = { character: ''}
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
                {(this.props.gameWord && this.props.status==='open') &&
                    <div>
                        <Word word={this.props.displayWord} />
                        <Form
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            value={this.state.character}
                        />
                    </div>
                }
                {!(this.props.status==='open') &&
                    <button onClick={this.componentDidMount}>Start a New Game</button>
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