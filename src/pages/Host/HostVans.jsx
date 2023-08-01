import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';


export const loader = async () => {
    await requireAuth()
    return getHostVans()
}

const HostVans = () => {
    const vanDetail = useLoaderData()

    const hostVanDetail = vanDetail.map(van => (
        <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div key={van.id} className="host-van-single">
                    <img src={van.imageUrl} alt='vans and their description'/>
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
            </div>
        </Link>
        
    ))



  return (
    <div>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
        {
                    vanDetail.length > 0 ? (
                        <section>
                            {hostVanDetail}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
        </div>
        
    </div>
  )
}

export default HostVans;