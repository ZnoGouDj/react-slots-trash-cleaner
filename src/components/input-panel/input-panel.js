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
        this.setState({
            label: this.props.filterThisTrash(this.state.label)
        })
    }

    render() {
        const { language } = this.props;

        const translate = language === 'english'
        const placeholder = translate ? "What needs to be cleaned" : "Что нужно очистить"
        const button = translate ? "Pure Text" : "Очистить"
        const textWrapStart = !this.state.label ? '' : translate ? 'You can play these slots: ' : 'Вы можете играть в следующие слоты: '
        const textWrapEnd = !this.state.label ? '' : translate ? '. Good luck!' : '. Удачи!'

        return (
            <form
                className="input-panel-form"
                onSubmit={this.onSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        onChange={this.onLabelChange}
                        placeholder={placeholder}
                        value={textWrapStart + this.state.label + textWrapEnd}
                    />
                </div>
                <button
                    className="btn btn-info btn-lg">
                    {button}
                </button>
            </form>
        )
    }
}