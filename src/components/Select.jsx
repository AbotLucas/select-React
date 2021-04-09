import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Select.css'

function Select({ initialValue, data }) {

    const [selected, setSelected] = useState(initialValue)
    const [disabled, setDisabled] = useState('')

    useEffect(() => {
        if (data.length > 1) {
            setDisabled('Disabled ')
        }
    }, [])

    return (
        <div className='row'>
            <div className='col'>
                <select
                    className={`form-select form-control mb-3 ${disabled}`}
                    aria-label='Default select example'
                    onChange={(e) => (setSelected(data[e.target.value]))}>
                    {data.map((item, index) => {
                        return (
                            <option key={item.id} value={index} label={item.name} />
                        )
                    })}
                </select>
                <Card character={selected} />
            </div>
        </div>
    )
}

export default Select
