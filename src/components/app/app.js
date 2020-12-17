import React, { Component } from 'react';

import InputPanel from '../input-panel'
import LanguageFilter from '../language-filter/language-filter';

import './app.css'

export default class App extends Component {
    state = {
        language: 'english'
    }

    filterThisTrash = (text) => {
        if (!text) { alert('Please, paste any shitty game in the text area'); return; }
        if (text.indexOf('You can play these slots:') > -1) { return; }
        if (text.indexOf('Вы можете играть в следующие слоты:') > -1) { return; }

        let getSlotsArray = JSON.parse(text);

        let getTheSlotNames = getSlotsArray.map(e => e.split(':').pop().replace(/_not_mobile_html_sw/g, '')
            .replace(/_mobile_html_sw/g, '').replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                return str.toUpperCase();
            })
        )

        let removeDuplicates = [...new Set(getTheSlotNames)];

        return removeDuplicates.join(', ')
    }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        const background = this.state.language === 'english' ? 'usa' : 'russia'

        return (
            <div className={`slots-trash-cleaner ${background}`}>
                <div className="language-filter-panel">
                    <LanguageFilter
                        language={this.state.language}
                        onLanguageChange={this.onLanguageChange} />
                </div>
                <div className="input-panel">
                    <InputPanel
                        language={this.state.language}
                        filterThisTrash={this.filterThisTrash} />
                </div>
            </div>
        )
    }
}