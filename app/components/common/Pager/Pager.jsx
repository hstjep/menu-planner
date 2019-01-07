import React from 'react';
import Pagination from "react-js-pagination";

const Pager = ({ pageSize, totalCount, page, handlePageChange }) => {
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={pageSize}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
        />
    );
}

export default Pager;