import React, { Component } from 'react';

import './input-panel.css'

export default class InputPanel extends Component {
    state = {
        label: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}>
                <input />
                <button
                    className="btn btn-outline-secondary">
                    Pure Text
                    </button>
            </form>
        )
    }
}