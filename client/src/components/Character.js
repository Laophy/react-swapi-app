import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Character() {
    const [character, setCharacter] = useState({});
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/api/characters/${id}`).then(res => res.json()).then((data) => {
            setCharacter(data)
        })
    }, [])

    return (
        <>
            <h1>{character.name}</h1>
        </>
    )
}