export async function getVans(id) {
    try{
        const url = id ? `/api/vans/${id}` : "/api/vans"
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error ({
                message: "Failed to fetch vans",
                statusText: res.statusText,
                status: res.status
            })
        }
        const data = await res.json()
        return data.vans
    } catch (error) {
        console.log(error)
    } 
}

export async function getHostVans(id) {
    try {
        const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error ({
                message: "Failed to fetch vans",
                statusText: res.statusText,
                status: res.status
            })
        }
        const data = await res.json()
        return data.vans
    } catch (error) {
        console.log(error)
    }  
}
