import React, { Component } from 'react';

import './language-filter.css';

export default class LanguageFilter extends Component {

    buttons = [
        { name: 'english', label: 'En' },
        { name: 'russian', label: 'Ru' }
    ]

    render() {
        const { language, onLanguageChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = language === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onLanguageChange(name)}>{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

}