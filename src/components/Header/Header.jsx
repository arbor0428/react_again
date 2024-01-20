import React from 'react';

export default function Header({filters, onChangeFilter}) {
    return (
        <header>
            <ul>
                {
                    filters.map((value, index)=>(
                        <li key={index}>
                            <button onClick={()=>onChangeFilter(value)}>{value}</button>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}

