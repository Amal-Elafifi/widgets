import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        'label': 'Africaans',
        'value': 'af'
    },
    {
        'label': 'Arabic',
        'value': 'ar'
    },
    {
        'label': 'Hindi',
        'value': 'hi'
    },
    {
        'label': 'French',
        'value': 'fr'
    },
    {
        'label': 'Italian',
        'value': 'it'
    }
]


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="ui field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
            label="Select a Language"
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
            />
            <br/>
            <h1 className="ui header">Output</h1>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;
