import React from 'react';
import classes from './css/Pagination.module.css';

import {
    range,
} from '../utils/utilFuncs';

const leftArrow = "&laquo;"
const rightArrow = "&raquo;"

const TabInfo = ({title, page, total, perPage}) => {
    <div>
        <h3>{title}</h3>
        <h5>{page}/{total}</h5>
        <h5>{perPage} items</h5>
    </div>
};

const TabBtn = ({tab, handleClick})=>(
    <div onClick={()=>{handleClick(tab)}}>
        {tab}
    </div>
);

const genrateRange = (page, total, neighbourTabBtns)=>{
    if(total < 2*neighbourTabBtns + 1)return range(1, total);
    let isLeftArrow = page > 2*neighbourTabBtns;
    let isRightArrow = total - page > 2*neighbourTabBtns;
    
    let visibleBtns = range(max(1, page-neighbourTabBtns), min(total, page+neighbourTabBtns));
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
        if(tab == leftArrow){
            prev();
        } else if(tab == rightArrow){
            next();
        } else {
            goto(tab);
        }
    }

    return (
        <div>
            <TabInfo title={title} page={page} total={total} perPage={perPage} />
            {rangeTabBtns.map((btn, index) => <TabBtn key={index} tab={btn} handleClick={handleClickOnBtn} />)}
        </div>
    );
}