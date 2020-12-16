import React, { Component } from 'react';

import InputPanel from '../input-panel'

import './app.css'
import LanguageFilter from '../language-filter/language-filter';

export default class App extends Component {
    state = {

    }

    filterThisTrash = (text) => {
        if (!text) { alert('Please, paste any shitty game in the text area'); return; }
        if (text.indexOf('You can play these slots:') > -1) { return; }
        if (text.indexOf('Вы можете играть в следующие слоты:') > -1) { return; }

        let newText = text.slice()
        let clean = newText
            .replace(/([A-Z])/g, ' $1')

            //providers
            .replace(/softswiss/g, '')
            .replace(/mrslotty/g, '')
            .replace(/pragmatic/g, '')
            .replace(/netent/g, '')
            .replace(/booming/g, '')
            .replace(/bsg/g, '')
            .replace(/endorphina/g, '')
            .replace(/evolution/g, '')
            .replace(/igtech/g, '')
            .replace(/isoftbet/g, '')
            .replace(/platipus/g, '')
            .replace(/playngo/g, '')
            .replace(/quickfire/g, '')
            .replace(/quickspin/g, '')
            .replace(/relax/g, '')
            .replace(/yggdrasil/g, '')
            .replace(/amatic/g, '')

            //mrslotty_trash_removal
            .replace(/_not_mobile_html_sw/g, '')
            .replace(/_mobile_html_sw/g, '')

            .replace(/[\[\]":]+/g, '')
            .replace(/^./, function (str) {
                return str.toUpperCase();
            })

        let uniq = clean.split(', ');
        let unique = [...new Set(uniq)];
        let final = unique.join(', ');

        return 'You can play these slots:' + final + '. Good luck!';

    }

    render() {
        return (
            <div className="slots-trash-cleaner">
                <div className="language-filter-panel">
                    <LanguageFilter />
                </div>
                <div className="input-panel">
                    <InputPanel filterThisTrash={this.filterThisTrash} />
                </div>
            </div>
        )
    }
}