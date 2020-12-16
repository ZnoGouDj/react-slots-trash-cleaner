import React, { Component } from 'react';

import './input-panel.css'

export default class InputPanel extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let filtered = this.props.filterThisTrash(this.state.label);
        this.setState({
            label: filtered
        })
    }

    render() {
        return (
            <form
                className="input-panel-form"
                onSubmit={this.onSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be cleaned"
                        value={this.state.label}
                    />
                </div>
                <button
                    className="btn btn-outline-secondary">
                    Pure Text
                    </button>
            </form>
        )
    }
}