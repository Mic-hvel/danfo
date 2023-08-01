import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'



export const loader = async ({params}) => {
    await requireAuth()
    return getHostVans(params.id)
    
}


const HostVanDetail = () => {
    const van = useLoaderData()


  return (
    <section>
            <Link to=".." className="back-button" >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt='van'/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HostVanDetail