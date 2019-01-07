import { CHANGE_PAGE, UPDATE_QUERY_PARAMS } from '../constants/actionTypes';
import { createBrowserHistory } from 'history';
import queryString from 'query-string';
const history = createBrowserHistory();

const changePage = (page) => {
    return () => {
        history.push(`${window.location.pathname}?page=${page}`);
    }
};

const setQueryOptions = (data) => {
    const params = queryString.parse(window.location.search);
    data = data || {};

    return {
        page: params.page ? parseInt(params.page) : data.page,
        pageSize: data.pageSize || 10,
        totalCount: data.totalCount,
        totalPages: data.totalPages,
        embed: data.embed || '',
        searchTerm: data.searchTerm || ''
    }
}

export { changePage, setQueryOptions };