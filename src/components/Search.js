import React , {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programing');
    const [bouncedTerm, setDebouncedterm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedterm(term);
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }

    }, [term])


    useEffect(() =>{
        const search = async() => {
            const data = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                   action: "query",
                   list: "search",
                   format: "json",
                   origin: "*",
                   srsearch: bouncedTerm,
                }
            });
            setResults(data.data.query.search);
        }
            search();

    }, [bouncedTerm])
    
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                      className="ui button"
                      href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='ui field'>
                    <label>Enter Your Search Term</label>
                    <input 
                        className='input'
                        type='text' 
                        value={term}
                        onChange= {(e) => setTerm(e.target.value)}
                    />
                </div>

            </div>
            <div className="ui celled list">
                 {renderedResults}
            </div>
        </div>
    )
}


export default Search;