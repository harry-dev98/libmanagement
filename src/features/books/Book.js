import React from 'react';

import books from './data';
import Table from '../common/Pagination';


export default () => {
    const headers = Object.keys(books[0]).slice(1);
    console.log(headers);
    return (
        <div style={{flex: 1, justifySelf: 'flex-start' }}>
            <Table headers={headers} items={books} title={"Books"} />
        </div>
    );
}