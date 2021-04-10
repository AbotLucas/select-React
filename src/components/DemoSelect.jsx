import React, { useState, useEffect } from 'react'
import Select from './Select'
import Loading from './Loading'

function DemoSelect() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [random, setRandom] = useState(Math.floor(Math.random() * 20))

    useEffect(() => {
        fetchMyAPI()
    }, [])

    const fetchMyAPI = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setData(data.results)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <div className='contenedor'>
            {console.log('cargo')}
            {loading ? (
                <Loading />
            ) : (
                <Select initialValue={data[random]} data={data} />
            )}
        </div>
    )
}

export default DemoSelect
