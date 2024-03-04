import React from 'react'

export default function Container({ children }) {
    return (
        <div className='container px-2 md:px-4'>
            {children}
        </div>
    )
}
