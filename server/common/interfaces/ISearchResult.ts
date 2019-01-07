interface ISearchResult {
    items: Array<Object>;
    page: number;
    totalCount: number;
    pageSize: number;
    totalPages: number;
    embed: string;
    searchTerm: string;
}

export default ISearchResult;