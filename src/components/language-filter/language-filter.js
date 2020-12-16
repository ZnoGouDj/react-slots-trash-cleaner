import React, { Component } from 'react';

import './language-filter';

export default class LanguageFilter extends Component {

    buttons = [
        { name: 'english', label: 'En' },
        { name: 'russian', label: 'Ru' }
    ]

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}>{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

}