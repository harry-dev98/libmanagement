import React, { useState , useEffect} from 'react';
import styles from './css/Pagination.module.css';

import PaginationTab from './PaginationTab';

export default function Pagination(props){
    const [items, setItems] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(1);
    const neighbourTabBtns = 2;

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
                title={"Books"}
                page={pageNo}
                total={totalPages}
                neighbourTabBtns={neighbourTabBtns}
                perPage={perPage}
                next={handleNext}
                prev={handlePrev}
                goto={handleGoTO}
            />
            <Tables items={items} headers={headers} />
        </div>
    )
}

