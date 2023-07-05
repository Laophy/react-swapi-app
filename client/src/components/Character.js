import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Character() {
    const [character, setCharacter] = useState({});
    const [planet, setPlanet] = useState({});
    const [film, setFilm] = useState({});
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/api/characters/${id}`).then(res => res.json()).then((data) => {
            setCharacter(data)
        })
        fetch(`http://localhost:4000/api/planets/${id}`).then(res => res.json()).then((data) => {
            setPlanet(data)
        })
        fetch(`http://localhost:4000/api/films/${id}`).then(res => res.json()).then((data) => {
            setFilm(data)
        })
    }, [])

    return (
        <>
            <h1>{character?.name}</h1>
            <div><Link to={`/planet/${character?.homeworld}`}>{planet?.name}</Link></div>
            <div><Link to={`/film/${film?.id}`}>{film?.title}</Link></div>
        </>
    )
}