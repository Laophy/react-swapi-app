import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Character() {
    const [character, setCharacter] = useState({});
    const [planet, setPlanet] = useState({});
    const [films, setFilms] = useState([]);
    const [filmData, setFilmData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/api/characters/${id}`).then(res => res.json()).then((data) => {
            setCharacter(data)
        })
        fetch(`http://localhost:4000/api/planets/${id}`).then(res => res.json()).then((data) => {
            setPlanet(data)
        })
        fetch(`http://localhost:4000/api/characters/${id}/films`).then(res => res.json()).then((data) => {
            setFilms(data)
        })
        fetch(`http://localhost:4000/api/films`).then(res => res.json()).then((data) => {
            setFilmData(data)
        })
    }, [])

    return (
        <>
            <h1>{character?.name}</h1>
            <div><strong>Homeworld</strong>: <Link to={`/planet/${character?.homeworld}`} style={{ textDecoration: 'none', color: 'black' }}>{planet?.name}</Link></div>
            <hr/>
            <div>
                <h2>Films</h2>
                {
                    films.map(film => {
                        return <div key={film?.id}><Link to={`/film/${film?.film_id}`} style={{ textDecoration: 'none', color: 'black' }}>{filmData.find(f => f.id === film.film_id).title}</Link></div>
                    })
                }
            </div>
        </>
    )
}