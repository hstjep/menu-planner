import ISearchResult from './../interfaces/ISearchResult';

class SearchResult implements ISearchResult {
    constructor(items: Array<Object>, totalCount: number, page: number, pageSize: number) {
        this.items = items;
        this.totalCount = totalCount;
        this.page = page;
        this.pageSize = pageSize;
        this.totalPages = Math.ceil(totalCount / pageSize);
    }

    items: Array<Object>;
    page: number;
    totalCount: number;
    pageSize: number;
    totalPages: number;
}

export default SearchResult;