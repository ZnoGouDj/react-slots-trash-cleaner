import React, { Component } from 'react';

import InputPanel from '../input-panel'

import './app.css'

export default class App extends Component {
    state = {

    }

    render() {
        return (
            <div className="slots-trash-cleaner">
                <InputPanel />
            </div>
        )
    }
}