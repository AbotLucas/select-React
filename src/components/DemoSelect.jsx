import React, { useState, useEffect } from 'react'
import Select from './Select'
import Loading from './Loading'

function DemoSelect() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setData(data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
        fetchMyAPI()
    }, [])

    return (
        <div className='contenedor'>
            {loading ? (
                <Loading />
            ) : (
                <Select initialValue={data.results[0]} data={data.results} />
            )}
        </div>
    )
}

export default DemoSelect
