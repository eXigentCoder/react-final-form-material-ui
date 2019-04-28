import { endsWith, startCase } from 'lodash';
import { parseName } from './';

export function nameToLabel({ name, label, prefix = '', suffix = '' }) {
    const _label = parseLabel(label);
    if (_label) {
        return _label;
    }
    const _name = parseName(name);
    const words = startCase(_name).split(' ');
    for (let i = 0; i < words.length - 1; i++) {
        if (endsWith(words[i], 's')) {
            const word = words[i];
            if (shouldGetApostrophe(word)) {
                words[i] = word.substr(0, word.length - 1) + "'s";
            }
        }
    }
    return prefix + words.join(' ') + suffix;
}

function parseLabel(label) {
    if (label && typeof label === 'string') {
        return label.trim();
    }
    return label;
}

function shouldGetApostrophe(word) {
    const wordsToIgnore = ['reasons', 'address', 'details', 'as', 'has'];
    return wordsToIgnore.indexOf(word.toLowerCase()) < 0;
}
