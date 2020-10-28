import React, { useState } from 'react';
import Card from '../common/Card';
import Form from '../common/Form';

import { useHistory } from 'react-router-dom';

import {useSelector, } from 'react-redux';
import {
    selectUser,
    selectLoginStatus,
    selectUserStatus,
} from '../user/state/UserSlice';

import {
    searchBook,
    returnBook,
} from '../utils/formdata';

export default function Home(){
    const history = useHistory();

    const [form, setForm] = useState([]);
    const [open, setOpen] = useState(false);
    
    const user = useSelector(selectUser);
    const login = useSelector(selectLoginStatus);
    const isAdmin = useSelector(selectUserStatus);

    if(!login){
        history.push('/logout');
    }

    console.log(user, login, isAdmin);

    const openPopup = (which) => {
        if(which === 'book'){
            setForm(searchBook);
        } else if (which === 'return') {
            setForm(returnBook);
        } else {
            
        }
        setOpen(true);
    }

    const closePopup = ({submit, form}) => {
        if(submit){
            if(form.which === 'Search'){
                history.push('/books');
            }
        }
        setOpen(false);
    } 
    
    const listUser = [
        {title: 'List of all books', label: 'Books', onclick: ()=>{openPopup('book')} },
        {title: 'List of all books I read', label: 'Readings',  onclick: ()=>{history.push('/books?query=read')} },
        {title: 'Update profile', label: 'Profile',  onclick: ()=>{history.push('/userprofile')} },
    ]
    
    const listAdmin = [
        {title: 'List of all books', label: 'Books', onclick: ()=>{openPopup('book')}},
        {title: 'Return a issued book', label: 'Returns',  onclick: ()=>{openPopup('return')}},
        {title: 'List of books with overdue', label: 'Over Dues',  onclick: ()=>{history.push('/books?query=overdue')}},
        {title: 'list of users subscribed', label: 'Users',  onclick: ()=>{history.push('/users?query=all')}},
    ]

    return (
        <>
            <Card list={isAdmin?listAdmin:listUser} />
            <Form open={open} formItems={form} which={"Search"} closePopup={closePopup} />
        </>
    )
}