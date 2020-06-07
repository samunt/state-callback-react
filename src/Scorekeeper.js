import React, { Component } from 'react';

class Scorekeeper extends Component {
    constructor(props) {
        super(props)
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
        this.state = {
            score: 0
        }
    }
    singleKill() {
        this.setState(st => {
            return {score: st.score + 1};
        })
    }
    // tripleKill() {
    //     this.setState(state => {
    //         return {score: state.score + 1}
    //     });
    //     this.setState(state => {
    //         return {score: state.score + 1}
    //     });
    //     this.setState(state => {
    //         return {score: state.score + 1}
    //     });
    // }
    incrementScore(currState) {
        return {score: currState.score + 1}
    }
    tripleKill() {
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
        this.setState(this.incrementScore)
    }
    render() {
        return (
            <div>
                <h1>The score is {this.state.score}</h1>
                <button onClick={this.singleKill}>Add a point</button>
                <button onClick={this.tripleKill}>Triple</button>
            </div>
        )
    }
}

export default Scorekeeper;
