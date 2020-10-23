import React, { useState, useEffect } from 'react';

const styles = {
    popup: {
        position: 'absolute',
        top: '15vh',
        width: '70vw',
        height: '70vh',
        backgroundColor: 'white',
        borderRadius: 20,
        boxShadow: "6px 6px 8px -2px #262626",
    },
    formDiv: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        placeContent: 'center',
    },
    form: {
        placeContent: 'center',
        padding: 15,
    },
    formItem: {
        display: 'flex',
        flex:1, 
        justifySelf: 'center',
        // justifyContent: ,
        padding: 10,
        margin: 15,
    }

}

export default function Form(props){
    const [lists, setLists] = useState([]);

    useEffect((eff)=>{
        console.log(eff);
        setLists(props.formItems || []);
    }, [props.formItems])
    const addInputRef = (ref, label)=>{
        console.log(label, ref);
    }
    const submitForm = ()=>{
        console.log('submit');
    }
    const closeForm = ()=>{
        console.log('submit');
    }
    return (
        <>
            { (props.open)?
                <div style={styles.popup}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h3 style={{color: '#042F19'}}>{props.which}</h3>
                    </div>
                    <div style={styles.formDiv}>
                    <form style={styles.form}>
                        {lists.map((item, index)=>(
                            <div key={index} style={styles.formItem}>
                                <label
                                    title={item.name}
                                    aria-label={item.name} 
                                    htmlFor={index} 
                                    style={{flex: 1}}
                                >{item.label}:</label>
                                <input 
                                    id={index} 
                                    type={item.type} 
                                    name={item.name} 
                                    aria-label={item.title} 
                                    title={item.title}
                                    required={item.required} 
                                    ref={(ref)=>addInputRef(ref, item.name)}
                                    style={{flex:1}}
                                />
                            </div>
                        ))}
                        <div style={{...styles.formItem, justifyContent: 'space-evenly'}}>
                            <input type='submit' value="Submit" title="Click to submit form" aria-label="submit form" onClick={submitForm()}/>
                            <input type='button' value="Close" title="Click to close form" aria-label="close form" onClick={closeForm()}/>
                        </div>
                    </form>
                    </div>
                </div>
                :null
            }
        </>
    );
}