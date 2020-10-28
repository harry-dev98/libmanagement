import React from 'react';

import {
    capitalFirstLetter,
} from '../utils/utilFuncs';

import './css/Table.module.css';

export default ({items, headers})=>(
    <table>
        <thead>
            <tr>
                {headers.map((header, index)=>(
                    <th key={index}>{capitalFirstLetter(header)}</th>
                ))}
            </tr>
        </thead>
        <tbody>
        {items.map((item, index)=>{
            return (
                <tr key={index}>
                    {headers.map((header, index_)=>(
                        <td key={item.id+index+index_}>{item[header]}</td>
                    ))}
                </tr>
            )
        })}
        </tbody>
    </table>
);