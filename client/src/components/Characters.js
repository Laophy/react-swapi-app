import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Characters() {
    const [characters, setCharacters] = useState([]);

    function getCharacters() {
        fetch('http://localhost:4000/api/characters').then(res => res.json()).then(data => {
            setCharacters(data)
        })
    }

    // Set characters on page load once
    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
            <h1>All Characters</h1>
            {
                characters?.map(char => {
                    return <div key={char.id}><Link to={`/character/${char.id}`}>{char.name}</Link></div>
                })
            }
        </>
    )
}