import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Film() {
    const [film, setFilm] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [planetData, setPLanetData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/api/films/${id}`).then(res => res.json()).then((data) => {
            setFilm(data)
        })
        fetch(`http://localhost:4000/api/films/${id}/planets`).then(res => res.json()).then((data) => {
            setPlanets(data)
        })
        fetch(`http://localhost:4000/api/planets`).then(res => res.json()).then((data) => {
            setPLanetData(data)
        })
    }, [])

    return (
        <>
            <h1>{film.title}</h1>
            <hr/>
            <div>
            <ul>
                <li>Episode Number: {film.episode_id}</li>
                <li>Director: {film.director}</li>
                <li>Release Date: {film.release_date}</li>
                <li>Planets: <ul>{ planets.map(p => <li><Link to={`/planet/${planetData.find(pl => pl.id === p.planet_id)?.id}`} style={{ textDecoration: 'none', color: 'black' }}>{planetData.find(pl => pl.id === p.planet_id)?.name}</Link></li>) }</ul></li>
                <li>Characters: {"Characters"}</li>
            </ul>
            </div>
        </>
    )
}