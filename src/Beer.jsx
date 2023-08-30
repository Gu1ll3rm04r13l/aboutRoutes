import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams()
    const navigate = useNavigate();


    const getBeer = async () => {
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(() => {
        getBeer()
    })


    function handleClick() {
        const nextBeerId = Number(params.id) + 1;
        if (nextBeerId<326)
            navigate(`/beer/${nextBeerId}`);
        else
            {
                alert('No more beer found')
            }
    }

    return (
        <div>
            <h2>Cerveza numero... {beer.id}</h2>
            <div className='card'>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={handleClick}>Next Beer</button>
        </div>

    )
}

export default Beer