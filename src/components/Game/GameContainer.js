import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import Form from './Form'
import Word from './Word'
import { getRandomWord } from '../../actions/game'

class GameContainer extends Component {
    state = { character: '', errorForm: '' }
    componentDidMount() {
        this.props.getRandomWord()
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({ character: '' })
        return //this.loadResultPage(this.state.character)
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
                {this.props.gameWord &&
                    <div>
                        <Word word={this.props.gameWord} />
                        <Form
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            value={this.state.character} 
                        />
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { gameWord } = state.game
    return { gameWord }
}

export default connect(mapStateToProps, { getRandomWord })(GameContainer)