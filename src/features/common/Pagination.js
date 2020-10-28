import React, { useState , useEffect} from 'react';
import styles from './css/Pagination.module.css';

import PaginationTab from './PaginationTab';
import Table from './Table';

export default function Pagination(props){
    const [items, setItems] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(1);
    const neighbourTabBtns = 2;

    useEffect(()=>{
        setItems(props.items||[]);
    }, [props.items]);

    useEffect(() => {
        setHeaders(props.headers||[]);
    }, [props.headers]);

    const handleNext = () => {
        console.log('next');
    }

    const handlePrev = () => {
        console.log('prev');
    }
    
    const handleGoTO = () => {
        console.log('goto');
    }

    return (
        <div>
            <PaginationTab 
                title={props.title}
                page={pageNo}
                total={Math.ceil(totalItems/perPage)}
                neighbourTabBtns={neighbourTabBtns}
                perPage={perPage}
                next={handleNext}
                prev={handlePrev}
                goto={handleGoTO}
            />
            <Table items={items} headers={headers} />
        </div>
    )
}

