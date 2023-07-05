import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Film() {
    const [film, setFilm] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/api/films/${id}`).then(res => res.json()).then((data) => {
            setFilm(data)
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
                <li>Planets: {"Planets"}</li>
                <li>Characters: {"Characters"}</li>
            </ul>
            </div>
        </>
    )
}