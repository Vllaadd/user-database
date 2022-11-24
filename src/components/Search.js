import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    const [language, setLanguage] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=>{
        const params = new URLSearchParams();
    })

    const submitAction = (e) =>{
        e.preventDefault();
        setLanguage(input);
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
