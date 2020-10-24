import React from 'react';

export default ({items, headers})=>(
    <table>
        <tr>
            {headers.map((header, index)=>(
                <th key={index}>{header}</th>
            ))}
        </tr>
        {items.map((item, index)=>{
            return (
                <tr>
                    {headers.map((header, index_)=>(
                        <td key={100*index + index_}>{item[header]}</td>
                    ))}
                </tr>
            )
        })}
    </table>
);