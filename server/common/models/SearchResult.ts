import ISearchResult from './../interfaces/ISearchResult';

class SearchResult implements ISearchResult {
    constructor(items: Array<Object>, totalCount: number, page: number, pageSize: number, embed: string) {
        this.items = items;
        this.totalCount = totalCount;
        this.page = page;
        this.pageSize = pageSize;
        this.totalPages = Math.ceil(totalCount / pageSize);
        this.embed = embed;
    }

    items: Array<Object>;
    page: number;
    totalCount: number;
    pageSize: number;
    totalPages: number;
    embed: string;
}

export default SearchResult;