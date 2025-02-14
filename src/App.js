import React , {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



const items = [
    {
        "title": "What is react?",
        "discription": "It is javascript framework "
    },
    {
        "title": "Why you use react?",
        "discription": "Because it is favourite library for engineers"
    },
    {
        "title": "How you use react?",
        "discription": "By creating components"
    }
]


const options = [
    {
        "label": "The Color red",
        "value": "Red",
    },
    {
        "label": "The Color Green",
        "value": "Green",
    },
    {
        "label": "The Color Blue",
        "value": "Blue"
    }
]



export default () => {
    const [selected, setSelected] = useState(options[0])
  
    return (
        <div>
            <Header/>
           <Route path='/'>
                <Accordion items={items}/>
           </Route>
           <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label='Select a Color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    )
}