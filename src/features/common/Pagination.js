import React, { useState , useEffect} from 'react';
import styles from './css/Pagination.module.css';

import PaginationTab from './PaginationTab';

export default function Pagination(props){
    const [items, setItems] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(1);
    const shownPageTabs = 2;

    const handleNext = () => {
        console.log('next');
    }

    const handlePrev = () => {
        console.log('prev');
    }

    return (
        <div>
            <PaginationTab 
                title={"Books"}
                page={pageNo}
                total={totalPages}
                perPage={perPage}
                next={handleNext}
                prev={handlePrev}
            />
            <Tables items={items} />
        </div>
    )
}

