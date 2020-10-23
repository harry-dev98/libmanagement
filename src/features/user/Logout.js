import React, { useEffect, useState } from 'react';
import Card from '../common/Card';
import Form from '../common/Form';

export default function Logout(){
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState([]);
    const [which, setWhich] = useState("")

    useEffect((eff)=>{
        console.log(eff);
        if(!open && which !== ""){
            setOpen(true);
        }
    }, [which]);

    const formPopup = (which)=>{
        if(which === "login"){
            setForm([
                {
                    label: 'Username', 
                    name: 'username', 
                    type: 'text', 
                    title: 'Type your username', 
                    required: true, 
                },
                {
                    label: 'Password', 
                    name: 'password', 
                    type: 'password', 
                    title: 'Type your password', 
                    required: true, 
                },
                {
                    label: 'Admin/Staff', 
                    name: 'admin or staff', 
                    type: 'checkbox', 
                    title: 'Check if loging in as admin/staff', 
                    required: true, 
                },
            ]);
            setWhich("Login");
        } else {
            setForm([
                {
                    label: 'Username', 
                    name: 'username', 
                    type: 'text', 
                    title: 'Type your username', 
                    required: true, 
                },
                {
                    label: 'Password', 
                    name: 'password', 
                    type: 'password', 
                    title: 'Type your password', 
                    required: true, 
                },
                {
                    label: 'Confirm Password', 
                    name: 'confirm password', 
                    type: 'password', 
                    title: 'Re-Type your password', 
                    required: true, 
                },
                {
                    label: 'Email', 
                    name: 'email', 
                    type: 'email', 
                    title: 'Type your email id', 
                    required: true, 
                },
                {
                    label: 'Mob. Number', 
                    name: 'mobile', 
                    type: 'number', 
                    title: 'Type your email id', 
                    required: true, 
                },
            ]);
            setWhich("Registration");
        }
    }

    const list = [
        {
            title: 'Login to your account', 
            label: 'Login', 
            onclick: ()=>{formPopup("login")},
            haspopup: true},
        {
            title: 'Register your self on platform',
            label: 'Register', 
            onclick: ()=>{formPopup("register")},
            haspopup: true},
    ]
    return (
        <>
            <Card list={list} />
            <Form open={open} formItems={form} which={which} />
        </>
    );
}