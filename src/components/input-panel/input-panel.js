import React, { Component } from 'react';

import './input-panel.css'

export default class InputPanel extends Component {
    state = {
        label: ''
    }

    render() {
        return (
            <form>
                <input />
                <button
                    className="btn btn-outline-secondary">
                    Pure Text
                    </button>
            </form>
        )
    }
}