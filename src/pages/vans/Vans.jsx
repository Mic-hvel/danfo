import React from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api';




export async function loader() {
    return getVans()
}


const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type')

    const vans = useLoaderData()


    const displayedVans = typeFilter 
            ? vans.filter(van => van.type === typeFilter)
            : vans 

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`${van.id}`} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                <img src={van.imageUrl} alt='vans and their description'/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))


    let buttonColour = "van-type "
    if(typeFilter === 'simple') {
        buttonColour += 'simple'
    } else if (typeFilter === 'luxuury') {
        buttonColour += 'luxury'
    } else {
        buttonColour += 'rugged'
    }



  return (
    <div className="van-list-container">

        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button onClick={() => setSearchParams({type: "simple"})} className={buttonColour}>Simple</button>
            <button onClick={() => setSearchParams({type: "luxury"})} className={buttonColour}>Luxury</button>
            <button onClick={() => setSearchParams({type: "rugged"})} className={buttonColour}>Rugged</button>
            { typeFilter ?
                <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear filter</button>
                : null
            }
        </div>

        <div className="van-list">
            {vanElements}
        </div>
    </div>
  )
}

export default Vans