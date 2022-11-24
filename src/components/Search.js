import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Search(location) {
    const [language, setLanguage] = useState('');
    const [input, setInput] = useState('');

//    equivalent to componentDidMount, fires once when component mounts, because dependency array is empty
    useEffect(()=>{
        // get all the URL Params
        const params = new URLSearchParams(location.search);
        // get the q param
        const q = params.get('q');
        // set language in state to the q parameter
        setLanguage(q ? q : 'MatLab');
    })

    // function for handling form submit
    const submitAction = (e) =>{
        // prevetn default, so page won't reload on form submit
        e.preventDefault();
        // set language in state
        setLanguage(input);
        // add query string to URL
        // coming soon
        // clear the input 
        setInput('');
    }

    return (
        <>
            <div>
                <div>
                    <Link to="/" >Back to home</Link>
                    <h1>{language}</h1>
                    <p><span>{language}</span>is a very cool programming language.
                        It is used by many develipers from all around the world. Every
                        programmer should have heard of <span>{language}</span> before.</p>
                    <form onSubmit={submitAction}></form>
                    <input type="text"
                        placeholder='Type language'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}></input>
                    <div>
                        <button type='submit'>Go!</button>
                    </div>
                </div>
            </div>
        </>
    )
}
