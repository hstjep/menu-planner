import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

const Pager = ({ totalPages, page, handlePageChange }) => {
    return (
        <Pagination
            first={true}
            last={true}
            prev={true}
            next={true}
            bsSize="medium"
            items={totalPages}
            activePage={page}
            onSelect={handlePageChange}>
        </Pagination>
    );
}


export default Pager;