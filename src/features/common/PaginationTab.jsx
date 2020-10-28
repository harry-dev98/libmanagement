import React from 'react';
import './css/Pagination.module.css';

import {
    range,
} from '../utils/utilFuncs';

const leftArrow = "&laquo;"
const rightArrow = "&raquo;"

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    infocontainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    btncontainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btn: {
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
        backgroundColor: '#ffffff',
        height: 30,
        width: 30,
        borderRadius: 5,
    },
    text: {
        padding: "5px 10px",
        color: "#042F19",
    }

}

const TabInfo = ({title, page, total, perPage}) => (
    <div style={styles.infocontainer}>
        <h3 style={styles.text}>{title}</h3>
        <h5 style={styles.text}>{page}/{total}</h5>
        <h5 style={styles.text}>{perPage} Items</h5>
    </div>
);

const TabBtn = ({tab, handleClick})=>(
    <div style={styles.btn} onClick={()=>{handleClick(tab)}}>
        {tab}
    </div>
);

const genrateRange = (page, total, neighbourTabBtns)=>{
    if(total < 2*neighbourTabBtns + 1)return range(1, total);
    let isLeftArrow = page > 2*neighbourTabBtns;
    let isRightArrow = total - page > 2*neighbourTabBtns;
    
    let visibleBtns = range(Math.max(1, page-neighbourTabBtns), Math.min(total, page+neighbourTabBtns));
    let rangeArr = [
        ...(isLeftArrow?[1, leftArrow]:[]), 
        ...visibleBtns, 
        ...(isRightArrow?[rightArrow, total]:[])
    ];
    return rangeArr;

}

export default ({title, page, total, neighbourTabBtns, perPage, next, prev, goto})=>{
    const rangeTabBtns = genrateRange(page, total, neighbourTabBtns);
    console.log(rangeTabBtns);
    
    const handleClickOnBtn = (tab) => {
        if(tab === leftArrow){
            prev();
        } else if(tab === rightArrow){
            next();
        } else {
            goto(tab);
        }
    }

    return (
        <div style={styles.container}>
            <TabInfo title={title} page={page} total={total} perPage={perPage} />
            <div style={styles.btncontainer}>
                {rangeTabBtns.map((btn, index) => <TabBtn key={index} tab={btn} handleClick={handleClickOnBtn} />)}
            </div>
        </div>
    );
}