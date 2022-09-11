import React from 'react'

function Results() {
    const items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <p className='mt-20'>Rechercher</p>
            <ul role="list" className="divide-y divide-gray-200">
                {items.map((item) => (
                    <li key={item.id} className="px-4 py-4 sm:px-0">
                        <p className='mt-20'>Resultats</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Results