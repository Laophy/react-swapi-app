import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Planet() {
    const [planet, setPlanet] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/api/planets/${id}`).then(res => res.json()).then((data) => {
            setPlanet(data)
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
            </ul>
        </>
    )
}