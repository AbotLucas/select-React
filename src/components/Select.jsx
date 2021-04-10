import React, { useState, useEffect } from 'react'
import Card from './Card'
import './Select.css'

function Select({ initialValue, data }) {

    const [selected, setSelected] = useState(initialValue)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (data.length <= 1) {
            setDisabled(true)
        }
    }, [])

    return (
        <div className='row'>
            <div className='col'>
                <select
                    disabled={disabled}
                    className={`form-select form-control mb-3 ${disabled&&('bg-secondary')}`}
                    aria-label='Default select example'
                    onChange={(e) => (setSelected(data[e.target.value]))}>
                        <option key={initialValue.id} value={data.indexOf(initialValue)} label={initialValue.name} />
                    {data.map((item, index) => {
                        if(item !== initialValue) {
                        return (
                            <option key={item.id} value={index} label={item.name} />
                        )}
                    })}
                </select>
                {data.length===0 ? (<h3 style={{'color': '#fafafa'}}>No hay resultados para mostrar 💩</h3>) : (<Card character={selected} />)}
            </div>
        </div>
    )
}

export default Select
