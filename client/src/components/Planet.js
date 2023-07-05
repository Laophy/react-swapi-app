import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Planet() {
    const [planet, setPlanet] = useState({});
    const { id } = useParams();
    const [characters, setPlanetCharacters] = useState([]);
    const [allCharacters, setAllCharacters] = useState([]);
    const [films, setPlanetFilms] = useState([]);
    const [allFilms, setAllFilms] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/api/planets/${id}`).then(res => res.json()).then((data) => {
            setPlanet(data)
        })
        fetch(`http://localhost:4000/api/planets/${id}/characters`).then(res => res.json()).then((data) => {
            setPlanetCharacters(data)
        })
        fetch(`http://localhost:4000/api/characters`).then(res => res.json()).then((data) => {
            setAllCharacters(data)
        })
        fetch(`http://localhost:4000/api/planets/${id}/films`).then(res => res.json()).then((data) => {
            setPlanetFilms(data)
        })
        fetch(`http://localhost:4000/api/films`).then(res => res.json()).then((data) => {
            setAllFilms(data)
        })
    }, [])

    return (
        <>
            <h1>{planet?.name}</h1>
            <hr/>
            <h2>Climate: {planet.climate}</h2>
            <ul>
                <li>Terrain: {planet.terrain}</li>
                <li>Diameter: {planet.diameter}</li>
                <li>Rotation Period: {planet.rotation_period}</li>
                <li>Gravity: {planet.gravity}</li>
                <li>Surface Water: {planet.surface_water}</li>
                <li>Orbital Period: {planet.orbital_period}</li>
                <li>Population: {planet.population}</li>
                <li>Notable Characters: {<ul>{ characters.map(c => <li><Link to={`/character/${allCharacters.find(ch => ch.id === c.id)?.id}`} style={{ textDecoration: 'none', color: 'black' }}>{allCharacters.find(ch => ch.id === c.id)?.name}</Link></li>) }</ul>}</li>
                <li>Films: {<ul>{ films.map(f => <li><Link to={`/film/${allFilms.find(fi => fi.id === f.film_id)?.id}`} style={{ textDecoration: 'none', color: 'black' }}>{allFilms.find(fi => fi.id === f.film_id)?.title}</Link></li>) }</ul>}</li>
            </ul>
        </>
    )
}