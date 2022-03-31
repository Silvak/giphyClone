import React from 'react'
import './gif.css'

export default function Gif({id, title, url}) {
    return (
        <a href={`#${id}`} className='gif'>
            <img alt={title} src={url}/>
            <span>{id}</span>
        </a>
    )
}
