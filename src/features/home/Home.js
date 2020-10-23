import React from 'react';
import Card from '../common/Card';

export default function Home(){
    const list = [
        {title: 'List of all books', label: 'Books', onclick: ()=>{window.location.href = '/books'}},
        {title: 'List of books with overdue', label: 'Over Dues',  onclick: ()=>{window.location.href = '/books'}},
        {title: 'Return a issued book', label: 'Returns',  onclick: ()=>{window.location.href = '/books'}},
        {title: 'list of users subscribed', label: 'Users',  onclick: ()=>{window.location.href = '/users'}},
    ]
    return (
        <Card list={list} />
    )
}